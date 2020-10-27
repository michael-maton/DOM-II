// Your code goes here


//grabbing DOM elements

let intro = document.querySelector(".intro img");
let navBar = document.querySelector(".main-navigation")


// intro.src = "../img/fun-bus-flip.jpg";
// intro.src = "../img/fun-bus.jpg";



//event listeners
intro.addEventListener("mouseover", event => {
    intro.style.transform = "rotateY(180deg)";
    navBar.style.position = "fixed";
});

intro.addEventListener("mouseout", event => {
    intro.style.transform = "rotateY(0deg)";
    navBar.style.position = "fixed";
});

document.addEventListener("keydown", event => {
    if (event.key === "Backspace"){
        alert("Wait! Don't leave!!!!!");
    }
});

window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrollable === Math.ceil(scrolled)){
        alert("You've ran out of scrollable space!")
    }
});

document.addEventListener("dblclick", event => {
    let random = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log(random);
    document.body.style.backgroundColor = `${random}`;

});