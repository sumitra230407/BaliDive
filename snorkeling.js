let listBg = document.querySelectorAll('.bg');
let titleBanner = document.querySelector('.banner h1');

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
});