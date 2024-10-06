window.addEventListener("DOMContentLoaded", FetchData);

async function FetchData (){
    const res = await fetch("https://api.adviceslip.com/advice");
    const json = await res.json();

    const adviceTitle = document.createElement("h4");
    const adviceDescription = document.createElement("div");
    const generatorWrapper = document.querySelector(".generator-wrapper");

    generatorWrapper.append(adviceTitle)
    generatorWrapper.append(adviceDescription)

    generatorWrapper.innerHTML = 
    
    `
    <h4 class="advice-title">Advice #${json.slip.id}</h4>
    <p class="advice-description">"${json.slip.advice}"</p>
    `
}

const dice = document.querySelector(".dice")

dice.addEventListener("click", FetchData);

