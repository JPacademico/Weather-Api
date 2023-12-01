const KEY = "e0283766cee7e7e70be7e75409ae8042"

function searchButton(){
    let city = document.getElementsByClassName("name").value
    console.log(city)
}

async function fetchData(city){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
}