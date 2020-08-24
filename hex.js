const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function(){    
    let hexColor = getRandomHex();    

    document.body.style.background = hexColor;
    color.textContent = hexColor;    
});

function getRandomHex(){
    let hexColor = "#";

    // I have to create a hex color like #f1f5f8 --> # 123456 - for loop 6 times
    for (let i = 0; i < 6; i++){
        const randomNumber =  getRandomNumber();
        hexColor += hex[randomNumber];        
    }

    return hexColor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}



