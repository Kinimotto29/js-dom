//jezeli nei przypisujemy wartosci do innerHTML to pobieramy wnetrze danego elementu
console.log(document.getElementById('header').innerHTML);

//za pomoca innerHTML jestesmy w staniw wstrzykiwac nowe znaczniki
document.getElementById('header').innerHTML = '<p class="nowa_klasa">jakis tekst</p>';

var new_par = document.querySelector('#header p');
console.log(new_par.className);

//innerText
//nie jestesmy w stanie wstrzykiwac znacznikow
new_par.innerText = '<span>jakis konkretny tekst</span>';

console.log(document.getElementById('header').outerHTML);

//mozemy wstrzykiwac znaczniki
document.getElementById('header').outerHTML = '<div id="header">xkjbjbasbsajbdaskdash</div>';

//set/get klasy odbywa sie za pomoca metody .className - mozliwe jest usrawianie wiecej nzi jednej klasy
document.getElementById('header').className = 'nowa_klasa nowa_klasa2';

var linki = document.getElementsByClassName('link');
console.log(linki);
linki[2].href = 'http://google.com';
//document.getElementById('header').id = 'header2';

for(var i=0; i < linki.length; i++) {
    linki[i].style.color = 'red';
}