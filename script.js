let time = 10;
let promoTime = time * 60;
const countDown = document.querySelector('#countdown');

function startCountdown() {
  const startCountdown = setInterval(() =>{
    if (promoTime <= 0) {
      countDown.innerHTML = 'Promo is End';
      clearInterval(startCountdown)
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const min = Math.floor(promoTime / 60) % 60;
      const sec = Math.floor(promoTime % 60);

      countDown.innerHTML = `${days} days  ${hours} hr : ${zeroTime(min)} m : ${zeroTime(sec)}`
    }
  },1000);
}

const zeroTime = (t) => {
  return t < 10 ? '0' + t : t;
}

startCountdown();