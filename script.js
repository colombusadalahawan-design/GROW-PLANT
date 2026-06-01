const plants = [


    {
        name: "Coral Jade",
        link: "index.html#coral"
    },

    {
        name: "Lithops Julii",
        link: "index.html#lithops"
    },

    {
        name: "Black Bat Flower",
        link: "index.html#black-flower"
    },

    {
        name: "Rafflesia Arnoldii",
        link: "index.html#Rafflesia"
    },

    {
        name: "Kantong Semar",
        link: "index.html#kantong-semar"
    },

    {
        name: "Edelweiss",
        link: "index.html#edelweiss"
    },


    {
        name: "Actaea Pachypoda",
        link: "tanaman.html#actaea"
    },

    {
        name: "False Morels",
        link: "tanaman.html#false"
    },

    {
        name: "Budha Hand",
        link: "tanaman.html#budha"
    },

    {
        name: "Hydnora Africana",
        link: "tanaman.html#hydnora"
    },

    {
        name: "Welwitschia Mirabilis",
        link: "tanaman.html#welwitschia"
    },

    {
        name: "Psychotria Elata",
        link: "tanaman.html#psychotria"
    },


    {
        name: "Anggrek Hitam",
        link: "punah.html#anggrek"
    },

    {
        name: "Dendrobium Crumenatum",
        link: "punah.html#dendrobium"
    },

    {
        name: "Picea Chihuahuana",
        link: "punah.html#picea"
    },

    {
        name: "Cinnamomum Kanehirae",
        link: "punah.html#cinnamomum"
    },

    {
        name: "Cycas Micronesica",
        link: "punah.html#cycas"
    },

    {
        name: "Euphorbia Mayurnathanii",
        link: "punah.html#euphorbia"
    }

];

const searchBox = document.querySelector(".search-box");

const searchBtn = document.querySelector(".search-btn");

const searchInput = document.getElementById("searchInput");

const suggestions = document.getElementById("suggestions");

console.log("JS CONNECT");
console.log(suggestions);

const plantDatabase = {

"coral": "index.html#coral",
"coral jade": "index.html#coral",

"lithops": "index.html#lithops",
"lithops julii": "index.html#lithops",

"black flower": "index.html#black-flower",
"black bat flower": "index.html#black-flower",

"rafflesia": "index.html#Rafflesia",
 "rafflesia arnoldii": "index.html#Rafflesia",

"kantong semar": "index.html#kantong-semar",
 "edelweiss": "index.html#edelweiss",


"actaea": "tanaman.html#actaea",
"pachypoda": "tanaman.html#actaea",
"actaea pachypoda": "tanaman.html#actaea",

"false": "tanaman.html#false",
"morels": "tanaman.html#false",
"false morels": "tanaman.html#false",

"budha": "tanaman.html#budha",
"hand": "tanaman.html#budha",
"budha hand": "tanaman.html#budha",

"hydnora": "tanaman.html#hydnora",
"africana": "tanaman.html#hydnora",
"hydnora africana": "tanaman.html#hydnora",

"welwitschia": "tanaman.html#welwitschia",
"mirabilis": "tanaman.html#welwitschia",
"welwitschia mirabilis": "tanaman.html#welwitschia",

"psychotria": "tanaman.html#psychotria",
"elata": "tanaman.html#psychotria",
"psychotria elata": "tanaman.html#psychotria",


"anggrek": "punah.html#anggrek",
"hitam": "punah.html#anggrek",
"anggrek hitam": "punah.html#anggrek",

"dendrobium": "punah.html#dendrobium",
"crumenatum": "punah.html#dendrobium",
"dendrobium crumenatum": "punah.html#dendrobium",

"picea": "punah.html#picea",
"chihuahuana": "punah.html#picea",
"picea chihuahuana": "punah.html#picea",

"cinnamomum": "punah.html#cinnamomum",
"kanehirae": "punah.html#cinnamomum",
"cinnamomum kanehirae": "punah.html#cinnamomum",

"cycas": "punah.html#cycas",
"micronesica": "punah.html#cycas",
"cycas micronesica": "punah.html#cycas",

"euphorbia": "punah.html#euphorbia",
"mayurnathanii": "punah.html#euphorbia",
"euphorbia mayurnathanii": "punah.html#euphorbia"
}

function searchPlant(){

    const keyword = searchInput.value.toLowerCase().trim();



    if(plantDatabase[keyword]){

        window.location.href = plantDatabase[keyword];

    }

}

searchBtn.addEventListener("click", () => {

    if(!searchBox.classList.contains("active")){

        searchBox.classList.add("active");

        searchInput.focus();

        return;

    }

    searchPlant();

});

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        searchPlant();

    }

});

document.addEventListener("click", function(e){

    if(!searchBox.contains(e.target)){

        searchBox.classList.remove("active");

        searchInput.value = "";

    }

});

searchInput.addEventListener("input", function(){

    const value = this.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if(value === ""){

        suggestions.style.display = "none";

        return;
    }

    const filtered = plants.filter(plant =>
        plant.name.toLowerCase().includes(value)
    );

    if(filtered.length === 0){

        suggestions.style.display = "none";

        return;
    }

    filtered.forEach(plant => {

        const item = document.createElement("div");

        item.classList.add("suggestion-item");

        item.textContent = plant.name;

        item.addEventListener("click", () => {

            window.location.href = plant.link;

        });

        suggestions.appendChild(item);

    });

    suggestions.style.display = "block";

});

document.addEventListener("click", function(e){

    if(
        !searchBox.contains(e.target)
    ){

        suggestions.style.display = "none";

    }

});

const hamburger = document.getElementById("hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

if(window.innerWidth <= 768){
    searchBox.classList.add("active");
}