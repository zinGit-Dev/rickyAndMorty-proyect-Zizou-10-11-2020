//lo anterior a utilizar fetch()

function drawCard(characters) {

    const rickMarty = document.querySelector("#containerFinal")

    characters.forEach((character) => {
        const rickyDiv = document.createElement('div');
        rickyDiv.className = 'container';

        rickyDiv.innerHTML = `
           <div class="flexClass">
               <div id="characterName"  class="properties">${character.name}</div>
               <div class="properties">${character.status}</div>
           </div>
           <div>
           <img src="${character.image}" alt="${character.name}">
           </div>
           <div class="flexClass">
               <div class="properties">${character.species}</div>
               <div class="properties">${character.gender}</div>
           </div>
           <div class="location">${character.location.name}</div>
       
       `
        rickMarty.append(rickyDiv);
    });



}

function getCharacters() {
    const data = {
        info: {
            count: 671,
            pages: 34,
            next: 'https://rickandmortyapi.com/api/character?page=2',
            prev: null,
        },
        results: [
            {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'Earth (C-137)',
                    url: 'https://rickandmortyapi.com/api/location/1',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/1',
                    'https://rickandmortyapi.com/api/episode/2',
                    'https://rickandmortyapi.com/api/episode/3',
                    'https://rickandmortyapi.com/api/episode/4',
                    'https://rickandmortyapi.com/api/episode/5',
                    'https://rickandmortyapi.com/api/episode/6',
                    'https://rickandmortyapi.com/api/episode/7',
                    'https://rickandmortyapi.com/api/episode/8',
                    'https://rickandmortyapi.com/api/episode/9',
                    'https://rickandmortyapi.com/api/episode/10',
                    'https://rickandmortyapi.com/api/episode/11',
                    'https://rickandmortyapi.com/api/episode/12',
                    'https://rickandmortyapi.com/api/episode/13',
                    'https://rickandmortyapi.com/api/episode/14',
                    'https://rickandmortyapi.com/api/episode/15',
                    'https://rickandmortyapi.com/api/episode/16',
                    'https://rickandmortyapi.com/api/episode/17',
                    'https://rickandmortyapi.com/api/episode/18',
                    'https://rickandmortyapi.com/api/episode/19',
                    'https://rickandmortyapi.com/api/episode/20',
                    'https://rickandmortyapi.com/api/episode/21',
                    'https://rickandmortyapi.com/api/episode/22',
                    'https://rickandmortyapi.com/api/episode/23',
                    'https://rickandmortyapi.com/api/episode/24',
                    'https://rickandmortyapi.com/api/episode/25',
                    'https://rickandmortyapi.com/api/episode/26',
                    'https://rickandmortyapi.com/api/episode/27',
                    'https://rickandmortyapi.com/api/episode/28',
                    'https://rickandmortyapi.com/api/episode/29',
                    'https://rickandmortyapi.com/api/episode/30',
                    'https://rickandmortyapi.com/api/episode/31',
                    'https://rickandmortyapi.com/api/episode/32',
                    'https://rickandmortyapi.com/api/episode/33',
                    'https://rickandmortyapi.com/api/episode/34',
                    'https://rickandmortyapi.com/api/episode/35',
                    'https://rickandmortyapi.com/api/episode/36',
                    'https://rickandmortyapi.com/api/episode/37',
                    'https://rickandmortyapi.com/api/episode/38',
                    'https://rickandmortyapi.com/api/episode/39',
                    'https://rickandmortyapi.com/api/episode/40',
                    'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/1',
                created: '2017-11-04T18:48:46.250Z',
            },
            {
                id: 2,
                name: 'Morty Smith',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'Earth (C-137)',
                    url: 'https://rickandmortyapi.com/api/location/1',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/1',
                    'https://rickandmortyapi.com/api/episode/2',
                    'https://rickandmortyapi.com/api/episode/3',
                    'https://rickandmortyapi.com/api/episode/4',
                    'https://rickandmortyapi.com/api/episode/5',
                    'https://rickandmortyapi.com/api/episode/6',
                    'https://rickandmortyapi.com/api/episode/7',
                    'https://rickandmortyapi.com/api/episode/8',
                    'https://rickandmortyapi.com/api/episode/9',
                    'https://rickandmortyapi.com/api/episode/10',
                    'https://rickandmortyapi.com/api/episode/11',
                    'https://rickandmortyapi.com/api/episode/12',
                    'https://rickandmortyapi.com/api/episode/13',
                    'https://rickandmortyapi.com/api/episode/14',
                    'https://rickandmortyapi.com/api/episode/15',
                    'https://rickandmortyapi.com/api/episode/16',
                    'https://rickandmortyapi.com/api/episode/17',
                    'https://rickandmortyapi.com/api/episode/18',
                    'https://rickandmortyapi.com/api/episode/19',
                    'https://rickandmortyapi.com/api/episode/20',
                    'https://rickandmortyapi.com/api/episode/21',
                    'https://rickandmortyapi.com/api/episode/22',
                    'https://rickandmortyapi.com/api/episode/23',
                    'https://rickandmortyapi.com/api/episode/24',
                    'https://rickandmortyapi.com/api/episode/25',
                    'https://rickandmortyapi.com/api/episode/26',
                    'https://rickandmortyapi.com/api/episode/27',
                    'https://rickandmortyapi.com/api/episode/28',
                    'https://rickandmortyapi.com/api/episode/29',
                    'https://rickandmortyapi.com/api/episode/30',
                    'https://rickandmortyapi.com/api/episode/31',
                    'https://rickandmortyapi.com/api/episode/32',
                    'https://rickandmortyapi.com/api/episode/33',
                    'https://rickandmortyapi.com/api/episode/34',
                    'https://rickandmortyapi.com/api/episode/35',
                    'https://rickandmortyapi.com/api/episode/36',
                    'https://rickandmortyapi.com/api/episode/37',
                    'https://rickandmortyapi.com/api/episode/38',
                    'https://rickandmortyapi.com/api/episode/39',
                    'https://rickandmortyapi.com/api/episode/40',
                    'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/2',
                created: '2017-11-04T18:50:21.651Z',
            },
            {
                id: 3,
                name: 'Summer Smith',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Female',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/6',
                    'https://rickandmortyapi.com/api/episode/7',
                    'https://rickandmortyapi.com/api/episode/8',
                    'https://rickandmortyapi.com/api/episode/9',
                    'https://rickandmortyapi.com/api/episode/10',
                    'https://rickandmortyapi.com/api/episode/11',
                    'https://rickandmortyapi.com/api/episode/12',
                    'https://rickandmortyapi.com/api/episode/14',
                    'https://rickandmortyapi.com/api/episode/15',
                    'https://rickandmortyapi.com/api/episode/16',
                    'https://rickandmortyapi.com/api/episode/17',
                    'https://rickandmortyapi.com/api/episode/18',
                    'https://rickandmortyapi.com/api/episode/19',
                    'https://rickandmortyapi.com/api/episode/20',
                    'https://rickandmortyapi.com/api/episode/21',
                    'https://rickandmortyapi.com/api/episode/22',
                    'https://rickandmortyapi.com/api/episode/23',
                    'https://rickandmortyapi.com/api/episode/24',
                    'https://rickandmortyapi.com/api/episode/25',
                    'https://rickandmortyapi.com/api/episode/26',
                    'https://rickandmortyapi.com/api/episode/27',
                    'https://rickandmortyapi.com/api/episode/29',
                    'https://rickandmortyapi.com/api/episode/30',
                    'https://rickandmortyapi.com/api/episode/31',
                    'https://rickandmortyapi.com/api/episode/32',
                    'https://rickandmortyapi.com/api/episode/33',
                    'https://rickandmortyapi.com/api/episode/34',
                    'https://rickandmortyapi.com/api/episode/35',
                    'https://rickandmortyapi.com/api/episode/36',
                    'https://rickandmortyapi.com/api/episode/38',
                    'https://rickandmortyapi.com/api/episode/39',
                    'https://rickandmortyapi.com/api/episode/40',
                    'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/3',
                created: '2017-11-04T19:09:56.428Z',
            },
            {
                id: 4,
                name: 'Beth Smith',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Female',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/6',
                    'https://rickandmortyapi.com/api/episode/7',
                    'https://rickandmortyapi.com/api/episode/8',
                    'https://rickandmortyapi.com/api/episode/9',
                    'https://rickandmortyapi.com/api/episode/10',
                    'https://rickandmortyapi.com/api/episode/11',
                    'https://rickandmortyapi.com/api/episode/12',
                    'https://rickandmortyapi.com/api/episode/14',
                    'https://rickandmortyapi.com/api/episode/15',
                    'https://rickandmortyapi.com/api/episode/16',
                    'https://rickandmortyapi.com/api/episode/18',
                    'https://rickandmortyapi.com/api/episode/19',
                    'https://rickandmortyapi.com/api/episode/20',
                    'https://rickandmortyapi.com/api/episode/21',
                    'https://rickandmortyapi.com/api/episode/22',
                    'https://rickandmortyapi.com/api/episode/23',
                    'https://rickandmortyapi.com/api/episode/24',
                    'https://rickandmortyapi.com/api/episode/25',
                    'https://rickandmortyapi.com/api/episode/26',
                    'https://rickandmortyapi.com/api/episode/27',
                    'https://rickandmortyapi.com/api/episode/28',
                    'https://rickandmortyapi.com/api/episode/29',
                    'https://rickandmortyapi.com/api/episode/30',
                    'https://rickandmortyapi.com/api/episode/31',
                    'https://rickandmortyapi.com/api/episode/32',
                    'https://rickandmortyapi.com/api/episode/33',
                    'https://rickandmortyapi.com/api/episode/34',
                    'https://rickandmortyapi.com/api/episode/35',
                    'https://rickandmortyapi.com/api/episode/36',
                    'https://rickandmortyapi.com/api/episode/38',
                    'https://rickandmortyapi.com/api/episode/39',
                    'https://rickandmortyapi.com/api/episode/40',
                    'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/4',
                created: '2017-11-04T19:22:43.665Z',
            },
            {
                id: 5,
                name: 'Jerry Smith',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/6',
                    'https://rickandmortyapi.com/api/episode/7',
                    'https://rickandmortyapi.com/api/episode/8',
                    'https://rickandmortyapi.com/api/episode/9',
                    'https://rickandmortyapi.com/api/episode/10',
                    'https://rickandmortyapi.com/api/episode/11',
                    'https://rickandmortyapi.com/api/episode/12',
                    'https://rickandmortyapi.com/api/episode/13',
                    'https://rickandmortyapi.com/api/episode/14',
                    'https://rickandmortyapi.com/api/episode/15',
                    'https://rickandmortyapi.com/api/episode/16',
                    'https://rickandmortyapi.com/api/episode/18',
                    'https://rickandmortyapi.com/api/episode/19',
                    'https://rickandmortyapi.com/api/episode/20',
                    'https://rickandmortyapi.com/api/episode/21',
                    'https://rickandmortyapi.com/api/episode/22',
                    'https://rickandmortyapi.com/api/episode/23',
                    'https://rickandmortyapi.com/api/episode/26',
                    'https://rickandmortyapi.com/api/episode/29',
                    'https://rickandmortyapi.com/api/episode/30',
                    'https://rickandmortyapi.com/api/episode/31',
                    'https://rickandmortyapi.com/api/episode/32',
                    'https://rickandmortyapi.com/api/episode/33',
                    'https://rickandmortyapi.com/api/episode/35',
                    'https://rickandmortyapi.com/api/episode/36',
                    'https://rickandmortyapi.com/api/episode/38',
                    'https://rickandmortyapi.com/api/episode/39',
                    'https://rickandmortyapi.com/api/episode/40',
                    'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/5',
                created: '2017-11-04T19:26:56.301Z',
            },
            {
                id: 6,
                name: 'Abadango Cluster Princess',
                status: 'Alive',
                species: 'Alien',
                type: '',
                gender: 'Female',
                origin: {
                    name: 'Abadango',
                    url: 'https://rickandmortyapi.com/api/location/2',
                },
                location: {
                    name: 'Abadango',
                    url: 'https://rickandmortyapi.com/api/location/2',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                episode: ['https://rickandmortyapi.com/api/episode/27'],
                url: 'https://rickandmortyapi.com/api/character/6',
                created: '2017-11-04T19:50:28.250Z',
            },
            {
                id: 7,
                name: 'Abradolf Lincler',
                status: 'unknown',
                species: 'Human',
                type: 'Genetic experiment',
                gender: 'Male',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                location: {
                    name: 'Testicle Monster Dimension',
                    url: 'https://rickandmortyapi.com/api/location/21',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/10',
                    'https://rickandmortyapi.com/api/episode/11',
                ],
                url: 'https://rickandmortyapi.com/api/character/7',
                created: '2017-11-04T19:59:20.523Z',
            },
            {
                id: 8,
                name: 'Adjudicator Rick',
                status: 'Dead',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'unknown',
                    url: '',
                },
                location: {
                    name: 'Citadel of Ricks',
                    url: 'https://rickandmortyapi.com/api/location/3',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
                episode: ['https://rickandmortyapi.com/api/episode/28'],
                url: 'https://rickandmortyapi.com/api/character/8',
                created: '2017-11-04T20:03:34.737Z',
            },
            {
                id: 9,
                name: 'Agency Director',
                status: 'Dead',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                location: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
                episode: ['https://rickandmortyapi.com/api/episode/24'],
                url: 'https://rickandmortyapi.com/api/character/9',
                created: '2017-11-04T20:06:54.976Z',
            },
            {
                id: 10,
                name: 'Alan Rails',
                status: 'Dead',
                species: 'Human',
                type: 'Superhuman (Ghost trains summoner)',
                gender: 'Male',
                origin: {
                    name: 'unknown',
                    url: '',
                },
                location: {
                    name: "Worldender's lair",
                    url: 'https://rickandmortyapi.com/api/location/4',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
                episode: ['https://rickandmortyapi.com/api/episode/25'],
                url: 'https://rickandmortyapi.com/api/character/10',
                created: '2017-11-04T20:19:09.017Z',
            },
        ],
    };

    // Crearemos el array de personajes con el mismo formato que teníamos en characters a partir de data.

    const dataCharacters = data.results

    const formattedCharacters
        = dataCharacters.map((ele, i) => {

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

}


const characters = getCharacters();

drawCard(characters)