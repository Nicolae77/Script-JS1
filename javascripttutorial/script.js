const container = document.querySelector('#container');
const newImg = document.createElement('img');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
container.appendChild(newImg);

for(let i =1; i < 90; i++){
    const newImag = document.createElement('img');
    newImag.src = `${baseURL}${i}.png`
    container.appendChild(newImag)
}

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

