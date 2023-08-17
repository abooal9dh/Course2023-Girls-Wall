const syntax = document.querySelector('.syntax > h1');
const btn = document.querySelector('.joori > button');
const syntaxSpan = document.getElementById('language');

const syntaxArray = [
    `System<span style="color:white;">.<span style="color:#e06c75;">out</span>.</span><span style="color:#61afef;">println</span>
    `,
    `console<span style="color:white;">.<span style="color:#e06c75;">log</span></span>
    `,
    `<span style="color:#61afef;">print</span>
    `,
    `<span style="color:#61afef;">printf</span>
    `,
    `fmt<span style="color:white;">.<span style="color:#e06c75;">printf</span></span>
    `,
    `<span style="color:#61afef;">print</span>
    `, 
];

let pass = 0;

btn.addEventListener('click', () => {
    if(pass == syntaxArray.length - 1){
        pass = 0;
        syntaxSpan.innerHTML = syntaxArray[0];
    }else{
        pass++;
        syntaxSpan.innerHTML = syntaxArray[pass];  
    }  
});