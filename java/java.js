console.log('test')
const discoverPart = document.getElementById('discover-part');
console.log(document.getElementById('discover-part'))
if(discoverPart){

discoverPart.addEventListener('click', function(){
window.location.href='./main.html'

})
}
const deskPart = document.getElementById('desk-btn');
    if(deskPart){
        deskPart.addEventListener('click', function(){
window.location.href='./index.html'

    })
    
}


// main part
const boxBtn = document.querySelectorAll('.box-btn');

for(const btn of boxBtn){
    btn.addEventListener('click', function(event){
        const clicked = event.target;
     const decrementValue = document.getElementById('decrement').innerText;
     const newDecrementValue = parseInt(decrementValue);
     const incrementValue = document.getElementById('increment').innerText;
     const newIncrementValue = parseInt(incrementValue);
     if(clicked){
        alert('Board updated Successfully');
        const update = newDecrementValue - 1;
        document.getElementById('decrement').innerText = update;
        const update2 = newIncrementValue + 1;
        document.getElementById('increment').innerText = update2;
     }
    })
}