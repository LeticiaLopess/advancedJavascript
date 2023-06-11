export default class Countdown {
  constructor(futureDate, background, color) {
    this.futureDate = futureDate;
    this.background = background;
    this.color = color;
    this.countdownElement = null;
  }
  element() {
    this.countdownElement = document.createElement('span');
    this.countdownElement.style.background = this.background;
    this.countdownElement.style.color = this.color;
    document.querySelector('body').appendChild(this.countdownElement);
    this.updateCountdown();
    return this.countdownElement;
  }
  updateCountdown() {
    const {days, hours, minutes, seconds} = this.total
    const countdownText = `${days} dias ${hours} horas ${minutes} minutos e ${seconds} segundos`
    this.countdownElement.textContent = countdownText;
  }
  startCountdown() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
      if (this._timeStampDiff <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate)
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); // Math.floor arredonda pra baixo;
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000)); 
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000)); 
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000); 
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24; // faltam this.days dias e algumas horas, horas restantes dessa divisão
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
