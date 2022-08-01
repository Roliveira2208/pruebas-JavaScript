let cButton = document.querySelector('button');
let currTitle = document.querySelector('h1');

function setUserName() {
    let currName = prompt('Por favor, ingresa tu nombre.');
    if(!currName) {
        setUserName();
    } else {
        localStorage.setItem('name', currName);
        currTitle.textContent = 'Bienvenido ' + currName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    currTitle.textContent = 'Bienvenido,' + storedName;
}

cButton.onclick = function() {
    setUserName();
}
