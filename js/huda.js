let myname="my name : huda almutairy";
let index =1;


function writeText(){

document.querySelector('h2').textContent=myname.slice(0,index);

index++

if(index > myname.length){
    index=1;
}

}
setInterval(function(){

    writeText();


},100)