


// const output = document.getElementById('button');
// const display = document.getElementById('hii');

// output.addEventListener('click' ,  () => {
//   display.innerHTML = "Hello World"});



//   const add = document.getElementById('num') ;
//  const addition = document.getElementById('able');

//  let counter = 0;
//  add.innerText = counter;

//  function increaseNumber() {
// counter++;
// add.innerText = counter;
//  }

//  addition.addEventListener('click', increaseNumber)



//  const button = document.getElementById("simple-button");
// const theNumber = document.getElementById("the-number");
// const Div = document.getElementById("example-div");

// let counter = 0;
// theNumber.innerText = counter;

// function incrementBy1() {
//   counter++;
//   theNumber.innerText = counter;
// }
// button.addEventListener("click", incrementBy1);


// const items =  document.getElementById('the-number');
// const items2 =  document.getElementById('simple-button');

// let counter = 0;
// items.innerText = counter;


// items2.addEventListener('click' , () =>{
// counter++
// items.innerText = counter;
// });



// const button =  document.getElementById('color')


// function changeColor(){
//   document.body.style.backgroundColor='yellow';
//   button.innerHTML = 'yellow';
// } 
// button.addEventListener('click', changeColor);




const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

	const randomNumber = getRandomNumber();

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
const colors = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"Burlywood",
	"CadetBlue",
	"Chartreuse",
];




