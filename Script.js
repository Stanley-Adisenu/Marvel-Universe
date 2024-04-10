const LoadText = document.querySelector('.landing-Text');
const bg = document.querySelector('.landing-bg');
const Gs = document.querySelector('.GetStarted');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    LoadText.innerText = `${load}%`;
    LoadText.style.opacity = scale(load, 0, 100, 1, 0);
    Gs.style.opacity = scale(load, 100, 0, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


const Slides = document.querySelectorAll('.Slide');

window.addEventListener('scroll', Slider);
Slider();
function Slider() {
    const triggerbottom = window.innerHeight / 5 * 4;

    Slides.forEach(Slide => {
        const SlideTop = Slide.getBoundingClientRect().top;

        if (SlideTop < triggerbottom) {
            Slide.classList.add('show');
        }
        else {
            Slide.classList.remove('show');
        }
    })
}

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    }

    updateCounter();
})