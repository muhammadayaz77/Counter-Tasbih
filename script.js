let counter = document.querySelector('.counter');
let num = document.querySelector('.num');
let op = document.querySelector('#op');
let i = 1;
let j = 0;

i = parseInt(i);
counter.onclick = () => {
    if(op.value == 1)
    {
        num.textContent = i++;
    }
    if(op.value==2)
    {
        
        num.textContent = j+=2;
    }
    if(op.value == 3)
    {
        num.textContent = j+=3;
    }
    if(op.value == 4)
    {
        num.textContent = j+=4;
    }
    if(op.value == 5)
    {
        num.textContent = j+=5;
    }
}

let reset = document.getElementById('reset');
reset.onclick = () => {
    i = 0;
    num.textContent = '0';
    j = 0;
}