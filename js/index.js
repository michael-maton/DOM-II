// Your code goes here


//grabbing DOM elements

let intro = document.querySelector(".intro img");
let navBar = document.querySelector(".main-navigation");
let mapPic = document.querySelector(".img-content img");
let cityPic = document.querySelector(".img-content:nth-of-type(1) img");




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
    let random = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${random}`;

});

document.addEventListener("wheel", () => {
    let random = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = `#${random}`;
});

mapPic.addEventListener("click", () => {
    let borderR = mapPic.style.borderRadius;
    if(borderR === "10px"){
        mapPic.style.borderRadius = "0px";
        mapPic.style.border = "5px solid black";
    }
    else{
        mapPic.style.borderRadius = "10px";
        mapPic.style.border = "";
    }
});

// cityPic.addEventListener("dragstart", () => {
//     cityPic.className += " hold";
//     setTimeout(() => (cityPic.className = "invisible"), 0);
// });

cityPic.addEventListener("dragstart", dragStart);
cityPic.addEventListener("dragend", dragEnd);

function dragStart() {
    this.style.border = "1px solid black";
    
}

function dragEnd() {
    this.style.border = "";
    this.style.display = "none";
}


Array.from(document.links).forEach(function(link){
    link.addEventListener("click", function(event){
        // console.log(
        //     `disrupting the default behavior of ${event.target.textContent} link`
        // );
        event.preventDefault();
    })
});