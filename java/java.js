const date = new Date();

const currentDay = date.toLocaleDateString('en-us', {
    weekday: 'short',
});
document.getElementById('current-day').innerText = currentDay + ',';
 
const currentDate = date.toLocaleDateString('en-us', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
});
document.getElementById('current-date').innerText = currentDate;


const discoverPart = document.getElementById('discover-part');
if(discoverPart){
discoverPart.addEventListener('click', function(){
window.location.href='./main.html'
})
}



const historyContainer = document.getElementById('History-container');
historyContainer.style.display = 'none';

// main part
const boxBtn = document.querySelectorAll('.box-btn');

for(const btn of boxBtn){
    btn.addEventListener('click', function(event){
        const clicked = event.target;

        // new part
        const parentBox = event.target.closest('.parrent-div-class');
        const boxTitle = parentBox.querySelector('.box-class').innerText;
        
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
        btn.disabled = true;
        btn.classList.add('bg-slate-300');
        
       
       historyContainer.style.display = 'block';

       
        const currentTime = new Date();
        const setTime = currentTime.toLocaleTimeString('en-us', {
            hour: '2-digit',
            minute: '2-digit',
            second: 'numeric',
            hour12: true
        });

        const p = document.createElement('p');
        p.innerText = `
        You have completed the task ${boxTitle} at ${setTime};
        `                                                   
        
        historyContainer.appendChild(p);
     }
    })
}

document.getElementById('clear-id').addEventListener('click', function(){
    historyContainer.innerText = '';
   historyContainer.style.display = 'none';
})

function setColor() {
    let colorList = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
        colorCode += colorList[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}
document.getElementById('change-bg-color').addEventListener('click', function () {
    document.body.style.backgroundColor = setColor();
})

const targetBox = document.getElementById('target-box');
const totalBox = document.querySelectorAll('.box-btn');
for(const box of totalBox){
    box.addEventListener('click', function(event){
        if(event.target === targetBox){
            alert('congrates!!! You have completed all the current task')
        }
    })
}

