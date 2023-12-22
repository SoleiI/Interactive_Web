const card = document.querySelector('section');
const txtmsg = document.querySelector('.txtmsg');
const txts = txtmsg.querySelectorAll('span');
let x = 0,
  y = 0;
let targetX = 0,
  targetY = 0;
let speed = 0.1;
let isMobile = false;
let isIos = false;

window.onload = () => {
  isMobile = checkMobile();
  isIos = checkIos();

  openCard();
  setTimeout(() => {
    writeMessage();
    /* PC : mousemove */
    if (!isMobile) handleMouseMove();
    else {
      /* Mobile : deviceorientation */
      if (isIos)
        DeviceOrientationEvent.requestPermission()
          .then(() => handleDeviceOrientation())
          .catch(console.error);
      else handleDeviceOrientation();
    }
  }, 1000);
};

const openCard = () => {
  card.style.visibility = 'visible';
};

const writeMessage = () => {
  txts.forEach((txt, i) => {
    console.log(txt);
    gsap.to(txt, { autoAlpha: 1, duration: 3, delay: i * 1.5 });
  });
  gsap.to('.txtmsg', { autoAlpha: 0, delay: 5.5 });
  gsap.to('.msg', { autoAlpha: 1, duration: 5, delay: 6 });
  gsap.to('h3', { autoAlpha: 1, duration: 3, delay: 7.5 });
};

/* 부드러운 효과 */
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  card.style.transform = `translate3d(-50%, -50%, 0) rotateX(${
    isMobile ? targetY - 50 : targetY / 10
  }deg) rotateY(${isMobile ? targetX : -targetX / 10}deg)`;

  window.requestAnimationFrame(loop);
};

const handleMouseMove = () => {
  window.addEventListener('mousemove', (e) => {
    /* 화면 좌표의 원점(0,0)을 화면의 정가운데로 맞춤 */
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  });
  loop();
};

const handleDeviceOrientation = () => {
  window.addEventListener('deviceorientation', (e) => {
    x = e.gamma;
    y = e.beta;
  });
  loop();
};

/* 모바일 기기 체크 */
const checkMobile = () => {
  const mobileKeyWords = new Array(
    'Android',
    'iPhone',
    'iPad',
    'BlackBerry',
    'Windows CE',
    'SAMSUNG',
    'LG',
    'MOT',
    'SonyEricsson'
  );
  for (let info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
};

/* ios 기기 체크 */
const checkIos = () => {
  var mobileKeyWords = new Array('iPhone', 'iPad');
  for (let info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
};
