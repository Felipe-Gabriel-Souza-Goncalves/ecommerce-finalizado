function condicionalAnimacao(){
    if(config.hasAnimation === true){
        document.getElementsByClassName("slider")[0].style.animation = " 30s infinite linear normal running sliderInicio"
    } else if(config.hasAnimation === false){
        document.getElementsByClassName("slider")[0].style.animation = "30s infinite linear normal running none"
    }
}

function addCategoria(texto, e, category){
    if(!texto || !e || !category) return

    e.disabled = true
    
    const div = document.createElement("div")
    div.classList.add("escolhido")
    div.classList.add(category === "plataforma" ? "plataforma" : "genero")
    div.setAttribute("onclick", `removeCategoria('${texto}', this)`)

    const span = document.createElement("h2")
    span.innerHTML = texto

    const img = document.createElement("img")
    img.src = 'IMG/delete.svg'
    img.width = '30'

    div.appendChild(span)
    div.appendChild(img)

    if(category == "plataforma"){
        document.getElementById("plataformasEscolhidas").appendChild(div)
    } else if(category == "genero"){
        document.getElementById("generosEscolhidos").appendChild(div)
    }

    searchCategories()
}

function limparCategorias(id){

    var botoesDesativados = document.querySelectorAll('button[class="botaoCategoria"][disabled]') 
    for(let i = 0; i<botoesDesativados.length;i++){
        botoesDesativados[i].disabled = false
    }

    document.getElementById(id).innerHTML = ""
}

function removeCategoria(texto, e){
    e.remove()
    var element = document.querySelector(`button[onclick^="addCategoria('${texto}'"]`)
    element.disabled = false
    searchCategories()
}

async function searchCategories(){
    
    let generosDesejados = document.querySelectorAll(".genero h2")
    generosDesejados = [...generosDesejados].map(c => {
        return c.innerText
    })

    let plataformasDesejadas = document.querySelectorAll(".plataforma h2")
    plataformasDesejadas = [...plataformasDesejadas].map(c => {
        return c.innerText
    })

    let idMatches = []

    await fetch("jogos.json").then(response => response.json())
    .then(jogos =>{
        jogos.forEach(jogo =>{
            let contem = true

            // Itera por cada genero do jogo
            generosDesejados.forEach(genero =>{
                if(!jogo.generos.includes(genero)){
                    contem = false
                }
            })

            plataformasDesejadas.forEach(plataforma =>{
                if(!jogo.plataformas.includes(plataforma)){
                    contem = false
                }
            })

            if(contem) idMatches.push(jogo.id)


        })
    })

    loadGamesWithCategory(idMatches)

}

function loadGamesWithCategory(array){
    document.getElementById("categoriaResultados").innerText = array.length + " resultados encontrados"
}

document.addEventListener("DOMContentLoaded", async() =>{
    let plataformas = {}
    let generos = {}
    
    await fetch("jogos.json").then(response => response.json())
    .then(jogos =>{
        jogos.forEach(jogo => {
            jogo.plataformas.forEach(item =>{
                plataformas[item] ? plataformas[item] += 1 : plataformas[item] = 1
            })
            jogo.generos.forEach(item =>{
                generos[item] ? generos[item] += 1 : generos[item] = 1
            })
        });

    })


    for(let key in generos){
        const button = document.createElement("button")
        button.classList.add("botaoCategoria")
        button.setAttribute("onclick", `addCategoria('${key}', this, 'genero')`)
        button.innerText = key

        document.getElementById("generos").appendChild(button)
    }

    for(let key in plataformas){
        const button = document.createElement("button")
        button.classList.add("botaoCategoria")
        button.setAttribute("onclick", `addCategoria('${key}', this, 'plataforma')`)
        button.innerText = key

        document.getElementById("plataformas").appendChild(button)
    }
})