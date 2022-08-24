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