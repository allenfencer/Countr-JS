const decreaseBtn = document.querySelector('.btn-decrease');
const resetBtn = document.querySelector('.btn-reset');
const incrementBtn = document.querySelector('.btn-increase');
let counter = document.querySelector('#value');
let count = 0;

decreaseBtn.addEventListener('click',function(){
    count--;
    counter.innerText = count;
    if(count<0){
        counter.style.color = 'red';
    }
    else if(count === 0){
        counter.style.color = 'black';

    }
    else{
        counter.style.color = 'green';

    }
});

incrementBtn.addEventListener('click',function(){
    count++;
    counter.innerText = count;
    if(count<0){
        counter.style.color = 'red';
    }
    else if(count === 0){
        counter.style.color = 'black';

    }
    else{
        counter.style.color = 'green';

    }
});

resetBtn.addEventListener('click',function(){
    count=0;
    counter.innerText = count;
    if(count<0){
        counter.style.color = 'red';
    }
    else if(count === 0){
        counter.style.color = 'black';

    }
    else{
        counter.style.color = 'green';

    }
});