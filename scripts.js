

function drawCard(characters) {

    const rickMarty = document.querySelector("#containerFinal")

    

    characters.forEach((character) => {
       
        const swapClasses = (element, add, remove) => {
            element.classList.add(add);
            element.classList.remove(remove);
        };
        /* const statusId = document.querySelector('#statusId'); */
    
        

        const rickyDiv = document.createElement('div');
      
        rickyDiv.className = 'container';

        rickyDiv.innerHTML = `
        
           <div class="flexClass">
               <div id="characterName"  class="properties">${character.name}</div>
               <div id="statusId" class="properties alive">${character.status}</div>
           </div>
           <div>
           <img src="${character.image}" alt="${character.name}">
           </div>
           <div class="flexClass">
               <div class="properties">${character.species}</div>
               <div class="properties">${character.gender}</div>
           </div>
           <div class="location">${character.location.name}</div>
           <div id = "ver" class="linkToCard"><a href="character.html?id=${character.id}" target="_blank">Ver personaje</a><div>
        
       
       `

      

        rickMarty.append(rickyDiv);

        const statusId = document.querySelector('#statusId');
       
        /* character.status === "dead" ? swapClasses(statusId, "dead", "alive") : swapClasses(statusId, "alive", "dead") */

        if(character.status === "dead"){
            swapClasses(statusId, "dead", "alive")
        } else {
            swapClasses(statusId, "alive", "dead")
        }
    });
    



}



let characterURL = 'https://rickandmortyapi.com/api/character'

// let nextUrl= ""

//lo siguiente la que le pide la información la formatea pero no la dibuja la guarda en la const formattedCharacters
function getCharacters() {
    return fetch(characterURL)
        .then(res => res.json())
        .then((apiData) => {
            console.log("respuesta de fetch", apiData)
            characterURL = apiData.info.next
            console.log("muestra url por cada vuelta:", characterURL)
            const formattedCharacters
                = apiData.results.map((ele, i) => {

                    return {
                        id: ele.id,
                        name: ele.name,

                        status: ele.status,
                        species: ele.species,
                        gender: ele.gender,
                        location: {
                            name: ele.location.name
                        },
                        image: ele.image,
                    }
                });
            return formattedCharacters
        })
}
//lo siguiente es lo que dibuja la información
getCharacters()
    .then(characters => {
        console.log(characters)
        // De aquí para abajo mantenemos lo que teníamos para pintar...
        // drawCards(characters)
        drawCard(characters)
    })


//esta función nos vuelve a cargar más characters porque fijate 
//en la url en la linea 47, llama a la siguiente página cuando vuelve a lanzarse
function handleButtonCargar() {

    getCharacters()
        .then(characters => {
            console.log(characters)
            drawCard(characters)
        })

}


const cargar = document.querySelector("#cargar")

cargar.addEventListener("click", handleButtonCargar)


