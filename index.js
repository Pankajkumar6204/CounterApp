// STEP-1st TO CREATE COUNTER APP

const countValue = document.querySelector('#count');

function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};

const decrement = () =>{
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;

};


// STEP-2nd TO CREATE COUNTER APP

// let counterValue = document.querySelector('.counter')

// function increment (){
//     let value = parseInt(counterValue.innerHTML);
//     value = value + 1;
//     counterValue.innerHTML = value;
// };

// function decrement(){
//     let value = parseInt(counterValue.innerHTML);
//     value = value -1;
//     counterValue.innerHTML = value;
// };