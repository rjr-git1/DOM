//create header main footer
/*
let node = document.getElementsByTagName('body');

let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer');

node[0].appendChild(header);
node[0].appendChild(main);
node[0].appendChild(footer);*/


/*
function generate() {
    let array = ['head', 'main', 'footer'];
    for (let index = 0; index < array.length; index++) {
        let newtag = document.createElement(array[index]);

        node[0].appendChild(newtag);

    }
}
generate();*/




// FROM HEADER , CREATE NAV id = navbar ,  UL ,  LI*4 + a href=#
/*
let node = document.getElementsByTagName('body');
let nav = document.createElement("navbar");
let header = document.createElement('header');
let ul = document.createElement("ul");
nav.id = "navbar";
let li = document.createElement("li");

node[0].appendChild(header);
header.appendChild(nav);
nav.appendChild(ul);


// Appending <li>*4
let liArr = [4];
let arr = ["Home", "About", "Products", "Contact"]
for (let index = 0; index < liArr.length; index++) {
    ul.appendChild(li);
}


// Appending <a>*4
for (let j = 0; j < arr.length; j++) {
    let a = document.createElement("a");
    li.appendChild(a);


}*/

/*
let node = document.getElementsByTagName('body');
let header = document.createElement('header');
node[0].appendChild(header);
let menuTextos = ["Home", "About", "Products", "Contact"];

let nav = document.createElement('nav');
let ul = document.createElement('ul');
for (let index = 0; index < menuTextos.length; index++) {
    let a = document.createElement("a");
    a.href = '#';
    let t = document.createTextNode(menuTextos[index]); // could have been created with innerHTML its the same
    a.appendChild(t);
    let li = document.createElement('li');
    li.appendChild(a);
    ul.appendChild(li)

}
nav.appendChild(ul);
nav.id = "navbar";

document.getElementsByTagName('header')[0].appendChild(nav);*/

let node = document.getElementsByTagName('body');
let header = document.createElement('header');
node[0].appendChild(header);
let menuTextos = ["Home", "About", "Products", "Contact"];


function crearMenu() {
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    for (let index = 0; index < menuTextos.length; index++) {
        let a = document.createElement("a");
        a.href = '#';
        let t = document.createTextNode(menuTextos[index]); // could have been created with innerHTML its the same
        a.appendChild(t);
        let li = document.createElement('li');
        li.appendChild(a);
        ul.appendChild(li)

    }

    ul.id = 'navbar'
    nav.id = 'container';
    nav.appendChild(ul)

    return nav
}

//document.getElementsByTagName('header')[0].appendChild(crearMenu());

function anyadirMenu() {
    document.getElementsByTagName('header')[0].appendChild(crearMenu());
}
let boton = document.getElementById('boton');
boton.onclick = anyadirMenu;


// hide button : use display property



let button2 = document.createElement('button');

node[0].appendChild(button2);
button2.id = 'mybutton';

function hide() {
    document.getElementsByTagName('header')[0].removeChild(document.getElementById('mybutton'));
}
button2.onclick = hide;