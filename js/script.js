const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'selection-1',
    displayName: 'Where is the love',
    artist: 'Black Eyed Peas',
  },

  {
    name: 'selection-2',
    displayName: 'Take care',
    artist: 'Drake feat. Rihanna',
  },

  {
    name: 'selection-3',
    displayName: 'Human',
    artist: 'Brandy',
  },

  {
    name: 'selection-4',
    displayName: '100 million Dollar',
    artist: 'DJ Khalid feat Rick Ross, Birdman, Young Jeezy, Lil Wayne,',
  },

  {
    name: 'selection-5',
    displayName: 'Lies about us',
    artist: 'Avant feat. Nicole Scherzinger',
  },
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update the DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIdex = 0;

// Previous Song 
function prevSong() {
  songIdex--;
  if (songIdex < 0) {
    songIdex = songs.length -1;
  }
  loadSong(songs[songIdex]);
  playSong();
}

// Next Song 
function nextSong() {
  songIdex++;
  if (songIdex > songs.length -1) {
    songIdex = 0;
  }
  loadSong(songs[songIdex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIdex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    console.log('minutes', durationMinutes);
    let durationSeconds = Math.floor( duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // Delay switching duration Element to avoid NaN
    if (durationSeconds){
      durationEl.textContent = `${durationMinutes} : ${durationSeconds}`;
    }

    // Calculate display for current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor( currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes} : ${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);