document.addEventListener('DOMContentLoaded', function() {
//tutaj nazwy funkcji, odpalane przy danym zdarzeniu
    changeColor();
    hoverLinks();
    zmienCos();
    wcisnijPodnies();
    wypiszZInputa();
})

window.addEventListener('resize', function() {
    zmienCos();
})

window.addEventListener('scroll', function() {
    
})

function changeColor() {
//tworze zmienna, ktora trzyma tablice z elementami o klasie
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.color = 'red';
    }
}

function hoverLinks() {
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.transition = 'all 0.2s ease-out';
        
        linki[i].addEventListener('mouseover', function() {
            this.style.color = 'blue';
        })
        
        linki[i].addEventListener('mouseout', function() {
            this.style.color = 'red';
        })
        
        linki[i].addEventListener('click', function(e) {
            e.preventDefault();
            this.style.fontSize = '25px';
        })
    }
}

function wcisnijPodnies() {
    var inputs = document.querySelectorAll('#form input');
    console.log(inputs);
    for(var i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('keydown', function() {
            this.style.background = 'green';
        })
    }
}

function wypiszZInputa() {
    var inputy = document.querySelectorAll('#form input');
    
    for(var i=0; i < inputy.length; i++) {
        inputy[i].addEventListener('change', function() {
            console.log(this.value);
        })
    }
}

function zmienCos() {
    if (window.outerWidth < 768) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'initial';
    }
}


function wypiszDoKonsoli() {
    console.log('123');
}

var form = document.getElementById('form');

//przypisanie funkcji do eventu po samej nazwie (nie używamy nawiasow)
form.addEventListener('click', wypiszDoKonsoli);
form.removeEventListener('click', wypiszDoKonsoli);

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    console.log(e.type);
    e.stopPropagation();
})

//window.addEventListener('mousemove', function(e) {
//    var x = e.clientX;
//    var y = e.clientY;
//    
//    console.log(x);
//    console.log(y);
//})

window.addEventListener('click', function() {
    console.log('kliknieto body');
})