let listBg = document.querySelectorAll('.bg');
let listTitle = document.querySelectorAll('.title');
let card = document.querySelectorAll('.main-card');
let menyediakan = document.querySelectorAll('.menyediakan');
let titleBanner = document.querySelector('.banner h1');
let listBg2 = document.querySelectorAll('.bg2');
let listBg3 = document.querySelectorAll('.bg3');
let peta = document.querySelectorAll('.peta-iteractive');

// Ambil elemen-elemen yang diperlukan
const gambarUtama = document.getElementById('gambar-utama');
const judulElement = document.getElementById('judul');
const deskripsiElement = document.getElementById('deskripsi');
const informasi = document.getElementById('informasi');
const moreinfo = document.getElementById('more-info-button');
const pilihanGambar = document.querySelectorAll('.pilihan');

// Tambahkan event listener ke setiap pilihan gambar
pilihanGambar.forEach(pilihan => {
    pilihan.addEventListener('click', () => {
        // Ambil data dari atribut data-info
        const info = JSON.parse(pilihan.getAttribute('data-info'));

        // Ganti gambar utama, judul, deskripsi, dan lokasi
        gambarUtama.src = info.src;
        judulElement.textContent = info.judul;
        informasi.textContent = info.informasi;
        deskripsiElement.innerHTML = `<a href="${info.href}"><i class="fa-solid fa-location-dot" style="color: #ff0000;"></i> ${info.lokasi}</a>`;
        
        // Pastikan tombol "More Information" tetap sama
        const buttonContainer = document.getElementById('more-info-button');
        buttonContainer.innerHTML = "<b>More Information</b>";  // Ini untuk memastikan teks tetap

        moreinfo.onclick = () => {
            window.location.href = info.moreinfo
        }
    });
});

let oscillationPosition = 0;
let direction = 1; // 1 for down, -1 for up

let lastScrollTop = 0;
const navbar = document.querySelector('.nav');

document.querySelectorAll('.list').forEach(item => {
    item.addEventListener('click', function() {
        // Menghapus kelas 'active' dari semua elemen
        document.querySelectorAll('.list').forEach(el => el.classList.remove('active'));
        
        // Menambahkan kelas 'active' ke elemen yang diklik
        this.classList.add('active');
        
        // Mendapatkan target id dari atribut data-target
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        // Menggulung ke bagian yang sesuai
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


// Event listener untuk scroll navbar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Fungsi animasi osilasi
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

// Mulai animasi osilasi saat halaman dimuat
window.addEventListener("load", animateOscillation);

// Event listener untuk scroll animasi
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
    // Set default language to English on page load
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
    // Show Indonesian language elements
    btn.style.left = "45px";
    showSplashScreen(); 
    document.querySelectorAll('[data-lang="id"]').forEach(el => el.style.display = 'block');
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = 'none');
}

function rightClick() {
    // Show English language elements
    btn.style.left = "0px";
    showSplashScreen(); 
    document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = 'block');
    document.querySelectorAll('[data-lang="id"]').forEach(el => el.style.display = 'none');
}

// // Ambil elemen yang dibutuhkan
// const comments = document.querySelectorAll('.comment');
// const nextButton = document.getElementById('next');
// const prevButton = document.getElementById('previous');

// let currentIndex = 0;
// const totalComments = comments.length;

// // Fungsi untuk memeriksa apakah elemen terlihat di viewport
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);



