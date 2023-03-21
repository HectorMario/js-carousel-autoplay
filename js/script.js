const pictur = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const giu = document.getElementById("down");
const su = document.getElementById("up");
const yu = document.getElementsByClassName("border")
const ju = document.getElementById("se")
let i = 0;
let counter = 3;
function mado (){
    myInterval = setInterval(function mado() {
            if( counter == 0) {
                baja();
                counter = 3;
            } 
            giu.addEventListener("click", baja)
            su.addEventListener("click", sube)
            se.addEventListener("mouseover", function(){
                clearInterval(myInterval);
            })
            se.addEventListener("mouseout", function(){
                reset()
            })
            console.log(counter);
            counter--;
        
        }, 1000);
}

function reset (){
    clearInterval(myInterval);
    counter = 3;
    mado();
}

function sube(){
    clearInterval(myInterval);
    counter = 3;
    mado();
    yu[i].classList.remove("ms-border")
    i -= 1;
    document.getElementById("se").src= pictur[i]
    console.log(i);
    if (i < 0){
        i  = pictur.length - 1;
        document.getElementById("se").src= pictur[i]
        yu[i].classList.add("ms-border");     
    }
    yu[i].classList.add("ms-border");
}

function baja(){
    clearInterval(myInterval);
    counter = 3;
    mado();
    yu[i].classList.remove("ms-border")
    i += 1;
    document.getElementById("se").src= pictur[i]
    if (i > pictur.length - 1){
        i= 0;
        document.getElementById("se").src= pictur[i]
        yu[i].classList.add("ms-border");
    }
    yu[i].classList.add("ms-border");
}

mado();