






// circel inner counter;

let counterSix=0
let counterTen=0
let counterFty=0;
let counterTwnty=0;
let counterNN=0;
function increment(){
    counterSix++;
    counterTen++;
    counterFty++;
    counterTwnty++;
    counterNN++;
    let countercircle6= document.getElementById("counter6").innerText=counterSix;
    let countercircle10= document.getElementById("counter10").innerText=counterTen;
    let countercircle50= document.getElementById("counter50").innerText=counterFty;
    let countercircle20= document.getElementById("counter20").innerText=counterTwnty;
    let countercircle99= document.getElementById("counter99").innerText=counterNN;
    // console.log(countercircle)

    if(counterSix >=6){
        counterSix = 5;
    }
    if(counterTen >=10){
        counterTen = 9;
    }

    if(counterFty >=50){
        counterFty = 49;
    }
    if(counterTwnty >=20){
        counterTwnty = 19;
    }

    if(counterNN >=99){
        clearInterval(myInterval);
    }
}   
const myInterval = setInterval(increment,1000);


    // setInterval(increment,500);
