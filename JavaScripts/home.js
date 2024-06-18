document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-audio");

  function playAudio() {
      audio.play();
      document.removeEventListener("click", playAudio);
      document.removeEventListener("scroll", playAudio);
  }

  document.addEventListener("click", playAudio);
  document.addEventListener("scroll", playAudio);

  // Initialize clock
  setInterval(clock, 1000);
  clock();
  // Fetch Gotham news
  fetchGothamNews();
});

function clock() {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var today = new Date();

  document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " +
      today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 11 ? 'AM' : 'PM';

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById('hours').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;
}

async function fetchGothamNews() {
  const gothamNews = [
      { title: 'Batman Foils Bank Robbery, Saves Hostages', url: '#' },
      { title: 'Mysterious Sightings of the Batmobile Around Gotham', url: '#' },
      { title: 'Gotham PD and Batman Team Up to Capture Riddler', url: '#' }
  ];

  const newsFeed = document.getElementById('gotham-news-feed');
  gothamNews.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      newsFeed.appendChild(li);
  });
}
