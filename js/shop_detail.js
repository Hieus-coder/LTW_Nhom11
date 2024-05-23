document.addEventListener('DOMContentLoaded',()=>{
    const giambutton= document.getElementById('giam');
    const tangbutton=document.getElementById('tang');
    const quantityDisplay=document.getElementById('kdau');
    let kdau=1;
    tangbutton.addEventListener('click', () => {
        kdau++;
        quantityDisplay.textContent = kdau;
    });

    giambutton.addEventListener('click', () => {
        if (kdau > 0) {
            kdau--;
            quantityDisplay.textContent = kdau;
        }
    });
    const textLinks = document.querySelectorAll('.Slideshow-heading .styles');
    const contents = document.querySelectorAll('.content-container .content');

    textLinks.forEach(link => {
        link.addEventListener('click', () => {
            const contentId = link.id + 'c';
            // Loại bỏ class active khỏi tất cả các text-link và nội dung
            textLinks.forEach(link => link.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Thêm class active vào text-link và nội dung được click
            link.classList.add('active');
            const activeContent = document.getElementById(contentId);
            activeContent.classList.add('active');
        });
    });
})