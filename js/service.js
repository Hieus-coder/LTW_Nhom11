let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco => {
    acco.onclick = () => {
        accordions.forEach(subAcco => {
            subAcco.classList.remove('active');
            let img = subAcco.querySelector('.accordion-heading img');
            if (img) {
                img.src = '../duong_img/led.png';
            }
        });
        acco.classList.add('active');
        let img = acco.querySelector('.accordion-heading img');
        if (img) {
            img.src = '../duong_img/topp.png';
        }
    };
});
