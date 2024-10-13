let listBg = document.querySelectorAll('.bg');
let listTitle = document.querySelectorAll('.title');
let card = document.querySelectorAll('.main-card');
let menyediakan = document.querySelectorAll('.menyediakan');
let titleBanner = document.querySelector('.banner h1');
let listBg2 = document.querySelectorAll('.bg2');
let listBg3 = document.querySelectorAll('.bg3');
let peta = document.querySelectorAll('.peta-iteractive')

let oscillationPosition = 0;
let direction = 1; // 1 for down, -1 for up

let lastScrollTop = 0;
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values on mobile
});


function animateOscillation() {
    const speed = 0.06;
    const maxOscillation = 30;
    

    oscillationPosition += speed * direction;

    // If the position reaches the bounds, change direction
    if (oscillationPosition >= maxOscillation || oscillationPosition <= -maxOscillation) {
        direction *= -1;
    }

    // Apply oscillation transform to the element at index 6
    if (listBg2[6]) {
        listBg2[6].style.transform = `translateY(${oscillationPosition}px)`;
    }

    // Call this function again for continuous animation
    requestAnimationFrame(animateOscillation);
}

// Start oscillation animation when the page is loaded
window.addEventListener("load", animateOscillation);

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    

    // Handle animation for the first set of backgrounds
    listBg.forEach((bg, index) => {
        if (index !== 5 && index !== 4 && index !== 3 && index !== 2) {
            bg.style.transform = `translateY(${(top * index / 3)}px)`;
        } else if (index === 3) {
            let scaleValue = 1 + top * 0.0005; 
            bg.style.transform = `scale(${scaleValue})`;
        } else if (index === 5) {
            let scaleValue = 1 + top * 0.0003; 
            bg.style.transform = `scale(${scaleValue})`;
        } else if (index === 2) {
            let scaleValue = 1 + top * 0.0002;
            bg.style.transform = `scale(${scaleValue})`;
        } else if (index === 0) {
            bg.style.transform = `translateY(${(top / 3)}px)`;
        }
    });

    titleBanner.style.transform = `translateY(${(top * 4 / 5)}px)`;

    // Get the offset of the bg2 section
    const bg2OffsetTop = document.querySelector('.banner2').offsetTop; 
    const windowHeight = window.innerHeight;

    // Check if bg2 is in view
    if (top + windowHeight > bg2OffsetTop) {
        const scrollIntoBg2 = top + windowHeight - bg2OffsetTop;

        // Animate the bg2 elements based on how far we've scrolled into bg2
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
                const moveX = scrollIntoBg2 / 20; 
                const moveY = scrollIntoBg2 / 25; 
                const scale = 1 + scrollIntoBg2 / 10009;

                bg.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
            } else if (index === 6) {
                bg.style.transform = `translateY(-${(scrollIntoBg2 / 20)}px)`;
            }
        });
    } else {
        // Reset the animation when not in view
        listBg2.forEach((bg) => {
            bg.style.transform = `translateY(0)`;
        });
    }

    // Manage active classes for titles and cards
    listTitle.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    card.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    menyediakan.forEach(tab => {
        if (tab.getBoundingClientRect().top < window.innerHeight - 100) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    peta.forEach(tab=> {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    })
});

var btn = document.getElementById('btn');

function showSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    splashScreen.style.display = 'flex';
    setTimeout(() => {
        splashScreen.style.display = 'none';
        window.scrollTo(0, 0);
    }, 2000);
}

function leftClick() {
    btn.style.left = "0px";
    showSplashScreen(); 
    translateToIndonesian(); 
}

function rightClick() {
    btn.style.left = "45px";
    showSplashScreen(); 
    translateToEnglish(); 
}


function translateToIndonesian() {
    document.querySelectorAll('[data-lang="id"]').forEach(el => {
        el.style.display = "block";
    });
    document.querySelectorAll('[data-lang="en"]').forEach(el => {
        el.style.display = "none";
    });
}

function translateToEnglish() {
    document.querySelectorAll('[data-lang="id"]').forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll('[data-lang="en"]').forEach(el => {
        el.style.display = "block";
    });
}


// Ambil elemen yang dibutuhkan
const comments = document.querySelectorAll('.comment');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

let currentIndex = 0; // Menyimpan indeks komentar yang sedang ditampilkan
const totalComments = comments.length; // Total komentar

// Fungsi untuk memeriksa apakah elemen terlihat di viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menambahkan kelas 'active' saat elemen terlihat



// Menambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);








