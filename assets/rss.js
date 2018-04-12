const HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
const RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=http://feeds.soundcloud.com/users/soundcloud:users:375018686/sounds.rss";
function get(endpoint) {
  return fetch(endpoint, {headers: HEADERS}).then((res) => res.json());
}
function month(m) {
  if(m === 0) return 'Jan';
  if(m === 1) return 'Feb';
  if(m === 2) return 'Mar';
  if(m === 3) return 'Apr';
  if(m === 4) return 'May';
  if(m === 5) return 'Jun';
  if(m === 6) return 'Jul';
  if(m === 7) return 'Aug';
  if(m === 8) return 'Sep';
  if(m === 9) return 'Oct';
  if(m === 10) return 'Nov';
  if(m === 11) return 'Dec';
}
console.log(window.location.pathname);
if (window.location.pathname === '/') {
  get(RSS_URL).then((data) => {
    const div = document.getElementById('episodes');
    for(let i = 0; i < 4; i++) {
      let a = data.items[i];
      let d = new Date(a.pubDate);
      let html = `<div class='episode col-12'><h4>${a.title}</h4><h5>${month(d.getMonth())} ${d.getDate()}, ${d.getFullYear()}</h5><p>${a.description}</p><a href='${a.link}'><div class='episode-listen'>Listen</div></a></div>`
      div.innerHTML += html;
    }
    console.log(data);
  });
}

if (window.location.pathname === '/episodes/') {
  get(RSS_URL).then((data) => {
    const div = document.getElementById('episodes');
    for(let i = 0; i < data.items.length; i++) {
      let a = data.items[i];
      let d = new Date(a.pubDate);
      let html = `<div class='episode col-12'><h4>${a.title}</h4><h5>${month(d.getMonth())} ${d.getDate()}, ${d.getFullYear()}</h5><p>${a.description}</p><a href='${a.link}'><div class='episode-listen'>Listen</div></a></div>`
      div.innerHTML += html;
    }
    console.log(data);
  });
}
