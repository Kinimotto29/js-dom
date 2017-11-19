//wyszukiwanie elementow po id
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

//wyszukiwaniw elementoow po klasie
var linki = document.getElementsByClassName('link');
console.log(linki);
console.log(linki[4]);

//wyszukiwanie elementow po znaczniku
var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

//wyszukiwanie elementow po znaczniku css - wszystkich elementow
var linkiCss = document.querySelectorAll('#parFirst .link');
console.log(linkiCss);

//wyszukiwanie elementow po znaczniku css - TYLKO pierwszego elementu
var linkCss = document.querySelector('#sectionFirst .link');
console.log(linkCss);