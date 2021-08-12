//Form submittal
let form = document.querySelector('#apiDataForm')

//Event listener for submit button
form.addEventListener('submit', (event) => {
    let season = document.querySelector('#season');
    let round = document.querySelector('#round');
    let query_season = event.path[0][0].value;
    let query_round = event.path[0][1].value;
})

//Get out racer Data with Axios
let getData = async () => {
    let season = document.querySelector('.season')
    let round = document.querySelector('.round')
    let response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
};

//Stores class in object
const DOM_Elements = {
    racer_list: '.racer-list'
};

//Create list for racer-list
const createList = () => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
    document.querySelector(DOM_Elements.racer_list).insert('beforeend', html)
};

//Loads data to list
const loadData = async () => {
    let racers = await getData();

    //Loops through array
    for (let i = 0; i < racers.length; i++) () => {
        let position = racers[i].position;
        let points = racers[i].points;
        let wins = racers[i].wins;
        let firstName = racers[i].givenName;
        let LastName = racers[i].familyName;
        let nationality = racers[i].nationality;
        let sponsor = racers[i].constructor[0].racers
        
};

//Clears all data
const clearData = async () => {
    document.querySelector(DOM_Elements.racer_list).innerHTML = ''; 
};
