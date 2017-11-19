var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//zwroci wezel rodzic
console.log(pierwszyDiv.parentNode);

//zwroci element rodzic
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[0]);

console.log(pierwszyDiv.children);

//targetuje pierwszy node
console.log(pierwszyDiv.firstChild);

//targetuje ostatni node
console.log(pierwszyDiv.lastChild);

var link = document.getElementById('link');

//target kolejny node rodzenstwo
console.log(link.nextSibling.nodeType);

//target poprzedni node rodzenstwo
console.log(link.previousSibling);

//target kolejny element rodzenstwo
console.log(link.nextElementSibling.nodeType);

//target poprzedni element rodzenstwo
console.log(link.previousElementSibling);

//nodeType - okresla rodzaj wezla numerycznie