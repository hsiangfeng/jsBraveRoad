let hourHand = document.querySelector('.hour-hand')
let minuteHand = document.querySelector('.minute-hand')
let secondHand = document.querySelector('.second-hand')

function clockFu() {
  const now = new Date()
  let houred = now.getHours()
  let minuted = now.getMinutes()
  let seconded = now.getSeconds()
  hourHand.style.transform = `rotate(${((houred / 60) * 360) - 90}deg)`
  minuteHand.style.transform = `rotate(${(minuted / 60) * 360}deg)`
  secondHand.style.transform = `rotate(${(seconded / 60) * 360}deg)`
  if (seconded === 0) {
    secondHand.style.transition = '0s'
  }else{
    secondHand.style.transition = 'all 1s linear'
  }
}
clockFu()
setInterval(clockFu, 1000)