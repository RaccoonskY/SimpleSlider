var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg',
    'http://www.sololearn.com/uploads/slider/2.jpg',
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
var slider = document.getElementById('slider');


function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}


function prev() {
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}