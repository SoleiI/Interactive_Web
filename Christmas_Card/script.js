const card = document.querySelector('section');
let x = 0,
  y = 0;
let targetX = 0,
  targetY = 0;
let speed = 0.1;

/* 부드러운 효과 */
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  card.style.transform = `translate3d(-50%, -50%, 0) rotateX(${
    targetY / 10
  }deg) rotateY(${-targetX / 10}deg)`;

  window.requestAnimationFrame(loop);
};

window.addEventListener('mousemove', (e) => {
  /* 화면 좌표의 원점(0,0)을 화면의 정가운데로 맞춤 */
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
});
loop();
