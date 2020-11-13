
const imgs = document.querySelectorAll('.img-min');
const main_img = document.querySelector('#img-big');


function changeImg(){
    imgs.forEach(img => img.classList.remove('active'));
    this.classList.add('active');
    main_img.src = this.src;
}

imgs.forEach(img => img.addEventListener('mouseover', changeImg));




