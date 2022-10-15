var hash = window.location.hash;
newStr = hash.replace('#', '');

document.querySelector("hash").classList.toggle("is-current");