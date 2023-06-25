var quotes = [
  ['The most exciting, challenging and significant relationship of all is the one you have with yourself.', 'Carrie Bradshaw'],
  ['They say nothing lasts forever; dreams change, trends come and go, but friendships never go out of style.', 'Carrie Bradshaw'],
  ['I love you, but I love me more.', 'Samantha Jones'],
  ['Maybe the past is like an anchor holding us back. Maybe you have to let go of who you were to become who you will be.', 'Carrie Bradshaw'],
  ['I want to enjoy my success, not apologize for it.', 'Miranda Hobbes'],
  ['I\'ve Been Dating Since I Was 15. I\'m Exhausted! Where Is He?', 'Charlotte York'],
  ['We whine when we don’t have a boyfriend and we whine when we do.', 'Miranda Hobbes'],
  ['After all, computers crash, people die, relationships fall apart. The best we can do is breathe and reboot.', 'Carrie Bradshaw']
]

function newQuote() {
var random = Math.floor(Math.random() * (quotes.length));
document.getElementById('text').innerHTML = quotes[random][0];
document.getElementById('author').innerHTML = quotes[random][1];
}