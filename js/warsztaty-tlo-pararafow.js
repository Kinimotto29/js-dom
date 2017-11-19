function zmienTlo() {
    var par = document.getElementsByTagName('p');
    par[0].style.background = 'green';
    par[1].style.background = 'red';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', zmienTlo);