// 圖片陣列 / Image array
const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1750446637235-3b55ab485b61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1602521368721-294847135907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174",
  "https://plus.unsplash.com/premium_photo-1751803834535-d0483b9fc043?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
];

let index = 0;
const photo = document.getElementById('photo');
const counter = document.getElementById('counter');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

function showimg() {
    photo.src = images[index];
    counter.textContent = `Image ${index + 1} of ${images.length}`
}

function nextimg() {
    index = (index + 1)%images.length;
    showimg(); 
}

function previmg() {
    index = (index + images.length -1)%images.length;
    showimg(); 
}

next.addEventListener('click', nextimg);
prev.addEventListener('click', previmg);

showimg


