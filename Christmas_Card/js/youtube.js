let bgmOn = false;

// YouTube API callback function
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'PjudGQXDbyk',
    playerVars: {
      loop: true,
      playlist: 'PjudGQXDbyk',
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// BGM control function
const onPlayerReady = (e) => {
  const bgmBtn = document.querySelector('.bgm_btn');
  const btnTxt = document.querySelector('.bgm_txt');
  const bgmTxt = document.querySelector('.copyright');

  bgmBtn.addEventListener('click', () => {
    // button style
    bgmOn = !bgmOn;
    bgmTxt.style.opacity = bgmOn ? '1' : '0';
    btnTxt.innerHTML = bgmOn ? 'OFF' : 'ON';

    // bgm on/off
    bgmOn ? e.target.playVideo() : e.target.pauseVideo();
  });
};
