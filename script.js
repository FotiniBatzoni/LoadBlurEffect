const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30); //burring ever 30 miliseconds

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;                //displays the load percentage
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    //0=load, 100=load, 1=opacity, 0=opacity

    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    //0=load, 100=load, 30=blur, 0=blur

}

//a function to map a range of numbers(load)(load)
//                  to another range of numbers(opacity)(blur)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};