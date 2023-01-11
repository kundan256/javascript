


function slideshow(num){
    let slides = document.getElementsByClassName('slide');
    // console.log(slides);
if(num ==slides.length){
    flag = 0;
    num = 0;
}

    for(let y of slides){
        y.style.display ="none";
    }
    slides[num].style.display = "block";
}
let flag = 0;

function controllar(x){
flag = flag + x;
slideshow(flag);

}
slideshow(flag);