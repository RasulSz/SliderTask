const slider = document.querySelector(".slider");

let isDragStart = false ,prevPageX , prevScrollLeft;

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = ()=>{
    isDragStart = false;
}

slider.addEventListener("mousedown",dragStart);
slider.addEventListener("mousemove",dragging);
slider.addEventListener("mouseup",dragStop);



var index;
var isClicked;
var previousindex;


function selectImg(id) {
    let firstImage = document.getElementById('1');

    let element = document.getElementById(id);
    let picture = document.querySelector('#main');
    picture.src = `images/${element.id}.jpg`;

    index = element.id;

    ElementWithStyle(element);

    setInterval(() => {
        if (index == 1) {
            firstImage.style.marginLeft = "-0px";
        }
        else if (index >= (imagesFolder.length - 3)) {
            firstImage.style.marginLeft = "-600px";
        }
        else {
            firstImage.style.marginLeft = `-${(index - 1) * 90}px`;
        }

        isClicked = true;
        previousindex = index;
        
    }, 500);

    if (isClicked) {
        let previousElement = document.getElementById(previousindex);
        Reset(previousElement);
    }
}

function Reset(element) {
    element.style.height = "150px";
    element.style.padding = "0px";
}

function ElementWithStyle(element) {
    element.style.height = "135px";
    element.style.padding = "3px";
}