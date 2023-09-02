console.log('HELLO WORLD!');
let display = document.getElementById('display');
function allclr(){
    display.value = null;
}

function clr(){
    display.value = display.value.slice(0, -1)
}

function additm(Num){
    display.value += Num;
}

function equal(){
    display.value = eval(display.value);
}

//Calculator Color Body Changer

// Get the selected color
const selectColor = document.getElementById('select-color');

// Event listener for changes to the selected color
selectColor.addEventListener('change', () => {

    // Get the selected value
    const selectedColor = selectColor.value;

    // Change the background color of the calculator body base on the selected value
    box.style.backgroundColor = selectedColor;
});

