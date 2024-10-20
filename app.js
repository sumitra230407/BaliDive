let listBg = document.querySelectorAll('.bg');
let listTitle = document.querySelectorAll('.title');
let card = document.querySelectorAll('.main-card');
let menyediakan = document.querySelectorAll('.menyediakan');
let titleBanner = document.querySelector('.banner h1');
let listBg2 = document.querySelectorAll('.bg2');
let listBg3 = document.querySelectorAll('.bg3');
let peta = document.querySelectorAll('.peta-iteractive');
let isi = document.querySelectorAll(".tempat-khursus");

const gambarUtama = document.getElementById('gambar-utama');
const judulElement = document.getElementById('judul');
const deskripsiElement = document.getElementById('deskripsi');
const informasi = document.getElementById('informasi');
const moreinfo = document.getElementById('more-info-button');
const pilihanGambar = document.querySelectorAll('.pilihan');
const defaultMoreInfoUrl = moreinfo.getAttribute('data-default-url');

moreinfo.onclick = () => {
    window.location.href = defaultMoreInfoUrl;
};

pilihanGambar.forEach(pilihan => {
    pilihan.addEventListener('click', () => {
        const info = JSON.parse(pilihan.getAttribute('data-info'));

        gambarUtama.src = info.src;
        judulElement.textContent = info.judul;
        informasi.textContent = info.informasi;
        deskripsiElement.innerHTML = `<a href="${info.href}">
            <i class="fa-solid fa-location-dot" style="color: #ff0000;"></i> ${info.lokasi}</a>`;

        moreinfo.onclick = () => {
            window.location.href = info.moreinfo;
        };
    });
});


let oscillationPosition = 0;
let direction = 1;

let lastScrollTop = 0;
const navbar = document.querySelector('.nav');

document.querySelectorAll('.list').forEach(item => {
    item.addEventListener('click', function() {

        document.querySelectorAll('.list').forEach(el => el.classList.remove('active'));
        
        this.classList.add('active');
        
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function animateOscillation() {
    const speed = 0.06;
    const maxOscillation = 30;

    oscillationPosition += speed * direction;

    if (oscillationPosition >= maxOscillation || oscillationPosition <= -maxOscillation) {
        direction *= -1;
    }

    if (listBg2[6]) {
        listBg2[6].style.transform = `translateY(${oscillationPosition}px)`;
    }

    requestAnimationFrame(animateOscillation);
}

window.addEventListener("load", animateOscillation);

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    listBg.forEach((bg, index) => {
        if (index !== 5 && index !== 4 && index !== 3 && index !== 2) {
            bg.style.transform = `translateY(${(top * index / 3)}px)`;
        } else if (index === 3) {
            bg.style.transform = `scale(${1 + top * 0.0005})`;
        } else if (index === 5) {
            bg.style.transform = `scale(${1 + top * 0.0003})`;
        } else if (index === 2) {
            bg.style.transform = `scale(${1 + top * 0.0002})`;
        } else if (index === 0) {
            bg.style.transform = `translateY(${(top / 3)}px)`;
        }
    });

    titleBanner.style.transform = `translateY(${(top * 4 / 5)}px)`;

    const bg2OffsetTop = document.querySelector('.banner2').offsetTop; 
    const windowHeight = window.innerHeight;

    if (top + windowHeight > bg2OffsetTop) {
        const scrollIntoBg2 = top + windowHeight - bg2OffsetTop;

        listBg2.forEach((bg, index) => {
            if (index !== 7 && index !== 4 && index !== 5) {
                bg.style.transform = `translateY(-${(scrollIntoBg2 / 30)}px)`;
            } else if (index === 1) {
                bg.style.transform = `translateY(-${(scrollIntoBg2 / 20)}px)`;
            } else if (index === 2) {
                bg.style.transform = `translateY(-${(scrollIntoBg2 / 25)}px)`;
            } else if (index === 3) {
                bg.style.transform = `translateY(-${(scrollIntoBg2 / 10)}px)`;
            } else if (index === 0) {
                bg.style.transform = `translateY(${(scrollIntoBg2 / 10)}px)`;
            } else if (index === 4) {
                bg.style.transform = `translate(${(scrollIntoBg2 / 7)}px, -${(scrollIntoBg2 / 7)}px)`;
            } else if (index === 5) {
                bg.style.transform = `translate(${scrollIntoBg2 / 20}px, ${scrollIntoBg2 / 25}px) scale(${1 + scrollIntoBg2 / 10009})`;
            } else if (index === 6) {
                bg.style.transform = `translateY(-${(scrollIntoBg2 / 20)}px)`;
            }
        });
    } else {
        listBg2.forEach(bg => {
            bg.style.transform = `translateY(0)`;
        });
    }

    listTitle.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });

    card.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });

    menyediakan.forEach(tab => {
        tab.classList.toggle('active', tab.getBoundingClientRect().top < window.innerHeight - 100);
    });

    peta.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
    isi.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
});


function showSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    splashScreen.style.display = 'flex';
    setTimeout(() => {
        splashScreen.style.display = 'none';
        window.scrollTo(0, 0);
    }, 2000);
}

var btn = document.getElementById('btn');

document.addEventListener('DOMContentLoaded', function () {

    const langElements = document.querySelectorAll('[data-lang]');
    langElements.forEach(el => {
        if (el.getAttribute('data-lang') === 'en') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    btn.style.left = "0px";
});

function leftClick() {
    btn.style.left = "45px";
    showSplashScreen(); 
    document.querySelectorAll('[data-lang="id"]').forEach(el => el.style.display = 'block');
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = 'none');
}

function rightClick() {
    btn.style.left = "0px";
    showSplashScreen(); 
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = 'block');
    document.querySelectorAll('[data-lang="id"]').forEach(el => el.style.display = 'none');
}

window.addEventListener('scroll', handleScroll);



