//adding a new element in the div using javascript

let div = document.querySelector(".container");
let p = document.createElement("p");
p.textContent = "LEARNING JS DOM";
div.appendChild(p);

//you can use this alternative too

// let div = document.querySelector('.container');
// div.innerHTML += '<p class="note">JS DOM</p>';

let fragment = new DocumentFragment();
let fragmen = document.createDocumentFragment();
