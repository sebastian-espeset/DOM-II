console.log("hello world"); // Your code goes here

//STEP 1, name some stuff....

//whole header
const headerEffect = document.querySelector("header");
console.log(headerEffect);

//"fun bus"
const funBusEffect = document.querySelector("header div h1");
console.log(funBusEffect);

//whole navigation bar
const wholeNavBar = document.querySelector("header div nav");
console.log(wholeNavBar);

//first(all) anchors within navigation bar
const anchorsNavBar = document.querySelector("header div nav a");
console.log(anchorsNavBar);

//container home?
const bigContainer = document.querySelector(".home");
console.log(bigContainer);

//first chunk of img and text
const secondContent = document.querySelector(".content-section");
console.log(secondContent);

//second chunk of img and text
const thirdContent = document.querySelector("div .inverse-content");
console.log(thirdContent);

//third chunk of img and text
const fourthContent = document.querySelector("div .content-destination");
console.log(fourthContent);

//choosing destination(all p's)
const chooseDestination = document.querySelector(".content-pick p");
console.log(chooseDestination);

//sign me up redirect
const signUpRedirect = document.querySelector("footer p");
console.log(signUpRedirect);

//-|-All elements I plan on adding effects too are labled and ready to treat-|-

//click event
headerEffect.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "blue";
});

//disapeparing bus
funBusEffect.addEventListener("mouseover", function (event) {
  event.target.style.display = "none";
});

//keydown makes background color change bar bigger

document.addEventListener("keydown", function (event) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.backgroundColor = "randomColor";
  event.target.style.backgroundColor = `#${randomColor}`;
  alert(`the color is #${randomColor}`);
});
