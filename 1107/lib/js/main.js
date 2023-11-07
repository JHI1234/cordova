const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [`img1.jpeg`, `img2.jpg`, `img3.jpg`, `img4.jpg`, `img5.jpg`, `img6.jpg`,`img7.jpg`,`img8.jpg`,`img9.jpg`,`img10.jpg`];
const indexes = images.keys();
/* Looping through images */

for (let image of images) {
  const newImage1 = document.createElement('img');
  newImage1.setAttribute('src', `./lib/img/galleryimg/${image}`);
  thumbBar.appendChild(newImage1);
  newImage1.addEventListener('click', e => {
    displayedImage.src = e.target.src;
  });
}

$(document).ready(function () {
  for (let i of indexes) {
    let list = $("<li>").attr({ "class": `list${i}` });
    $(".thumb").append(list);
    let anchor = $("<a>").attr({ 'href': `./lib/img/galleryimg/${images[i]}`, "class": `main${i}`});
    let img = $("<img>").attr({ 'src': `./lib/img/galleryimg/${images[i]}`});
    $(`.thumb .list${i}`).append(anchor);
    $(`.thumb .list${i} .main${i}`).append(img);
  }
  
  $(".thumb a").click(function(){
		$(".main img").attr("src", $(this).attr("href"))
    return false;
});
});
