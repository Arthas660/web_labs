const slides = [
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-N-SfjbLKoqfec1wM2a1OsyXstHNql_GmR2f-SW9SEVMKTfA5PkhAKmo&s=10", bg: "bg1" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNLEaLfce4gGZsQWUZRxaCiPH33h_2LEVCg6pzIw4h8DkQQNzY5l-k_w&s=10", bg: "bg2" },
  { img: "https://img-artline.ams3.cdn.digitaloceanspaces.com/images/products/23831/gallery/252296/600_gallery_17143840906557_0.webp", bg: "bg3" }
];

let i = 0;
const hero = document.getElementById('hero');
const img = document.getElementById('img');
const circs = document.querySelectorAll('.circ');

function update(index) {
  hero.classList.remove('bg1', 'bg2', 'bg3');
  hero.classList.add(slides[index].bg);
  img.src = slides[index].img;

    circs.forEach(c => c.classList.remove('active'));
  circs[index].classList.add('active');
}

circs.forEach((c, index) => {
  c.addEventListener('click', () => { 
    i = index; 
    update(i); 
  });
});

document.getElementById('next').addEventListener('click', () => {
  i = (i + 1) % slides.length;
  update(i);
});

document.getElementById('prev').addEventListener('click', () => {
  i = (i - 1 + slides.length) % slides.length;
  update(i);
});
