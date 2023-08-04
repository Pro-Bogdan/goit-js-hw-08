import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Vimeo(iframeEl);
let currentTime;
try {
  currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  currentTime = 0;
  console.log(
    error.message,
    `Can't get currentTime, set currentTime ${currentTime}`
  );
}

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(toSaveTime, 1000));

function toSaveTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
