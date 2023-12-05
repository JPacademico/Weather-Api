const KEY = "e0283766cee7e7e70be7e75409ae8042"

function searchButton(){
    let city = document.querySelector(".name").value
    fetchData(city)
    document.querySelector(".name").value = ""
}

async function fetchData(city){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=pt_br&units=metric`).then(Response=>Response.json())
    mostraDados(dados)
}

function mostraDados(dados){
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.round(dados.main.temp, 0) + "C°"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".img-clima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

}

document.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const btn = document.querySelector(".search");
        btn.click();
    }
});