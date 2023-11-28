class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;

  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
// chat gpt said it was too complicated and the easier way follows ->
    //  let formatedTime = value.toLocaleString('en-US', {
  //     minimumIntegerDigits: 2,
  //     useGrouping: false
  //   })
  //   return formatedTime
  return value < 10 ? `0${value}` : `${value}`;

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let formattedSec = this.computeTwoDigitNumber(this.getSeconds());
    let formattedMin = this.computeTwoDigitNumber(this.getMinutes());
    let formatedCentiSec = this.computeTwoDigitNumber(this.getCentiseconds());

    return {
      minutes: formattedMin,
      seconds: formattedSec

    }
  }
}
