let listBg = document.querySelectorAll('.bg');
let titleBanner = document.querySelector('.banner h1');
let judul = document.querySelectorAll(".judul");
let gambar_penjelasan = document.querySelectorAll(".gambar-penjelasan");
let jenis1 = document.querySelectorAll(".jenis-1");
let jenis2 = document.querySelectorAll(".jenis-2");
let peralatan = document.querySelectorAll(".peralatan");
let map = document.querySelectorAll(".map");
let lastScrollTop = 0;

const gambarUtama = document.getElementById('gambar-utama');
const judulElement = document.getElementById('judul');
const deskripsiElement = document.getElementById('deskripsi');
const informasi = document.getElementById('informasi');
const moreinfo = document.getElementById('more-info-button');
const pilihanGambar = document.querySelectorAll('.pilihan');
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

window.addEventListener("scroll", () => {
    let top = window.scrollY;
    console.log('Scroll Y:', top);

    listBg.forEach((bg, index) => {
        if (index != 8 && index != 7 && index != 6 && index != 5 && index != 4 && index != 3 && index != 2) {
            bg.style.transform = `translateY(${(top * index / 8)}px)`;
        }else if (index === 2) {
            bg.style.transform = `translateY(${(top * index / 10)}px)`;
        }else if (index === 3) {
            bg.style.transform = `scale(${1 + top * 0.0001})`;
        }else if (index === 7) {
            bg.style.transform = `translateY(${(top * -1)}px)`;
        }
    });

    titleBanner.style.transform = `translateY(${(top * 4 / 4)}px)`;
    console.log(`Transforming titleBanner: translateY(${(top * 4 / 2)}px)`);


    judul.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
    gambar_penjelasan.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
    jenis1.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
    jenis2.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
    map.forEach(tab => {
        tab.classList.toggle('active', tab.offsetTop - top < 550);
    });
    peralatan.forEach(tab => {
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

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


function submitForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}
