let countEl=document.getElementById('count_passengers');
let saveEl=document.getElementById('p');

let count=0;


function incr(){
    count=count+1;
    countEl.innerText=count;


}

function save(){
    let countStr=count+'-';
    saveEl.innerText+=countStr;
    countEl.innerText=0;
    count=0;



}