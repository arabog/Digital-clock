/* The Clock in functional style. */

// functional style-  first method
function Clock({input}) {
          let currentTime;

          function readingTime() {
                    let date = new Date();

                    let hour = date.getHours();
                    if(hour < 10) hour = '0' + hour;

                    let mins = date.getMinutes();
                    if(mins < 10) mins = '0' + mins;

                    let secs = date.getSeconds();
                    if(secs < 10) secs = '0' + secs;

                    let output = input     
                              .replace('h', hour)
                              .replace('m', mins)
                              .replace('s', secs)

                    console.log('Clock: ' + output);
          }

          this.stop = function () {
                    clearInterval(currentTime)
          }

          this.start = function () {
                    readingTime();
                    currentTime = setInterval(readingTime, 1000)
          }
}

let clock = new Clock({input : 'h:m:s'});
clock.start();
// clock.stop();


// functional style-  second method
function Watch() {
          let currentTime;

          function readingTime() {
                    let date = new Date();

                    let hour = date.getHours();
                    if(hour < 10) hour = '0' + hour;

                    let mins = date.getMinutes();
                    if(mins < 10) mins = '0' + mins;

                    let secs = date.getSeconds();
                    if(secs < 10) secs = '0' + secs;

                    console.log('Watch: ' + hour + ':' + mins + ':' + secs);
          }

          this.stop = function () {
                    clearInterval(currentTime)
          }

          this.start = function () {
                    readingTime();
                    currentTime = setInterval(readingTime, 1000)
          }
}

let watch = new Watch();
watch.start();
// watch.stop();


/* RewriteThe Clock class in the “class” syntax. */
class AnotherClock {
          constructor({input}) {
                    this.input = input;
          }

          render() {
                    let date = new Date();

                    let hour = date.getHours();
                    if(hour < 10) hour = '0' + hour;

                    let mins = date.getMinutes();
                    if(mins < 10) mins = '0' + mins;

                    let secs = date.getSeconds();
                    if(secs < 10) secs = '0' + secs;

                    let output = this.input 
                              .replace('h', hour)
                              .replace('m', mins)
                              .replace('s', secs)

                    console.log('Class: ' + output);
          }
  
          stop() {
                    clearInterval(this.times)
          }

          start() {
                    this.render();
                    this.times = setInterval(() => this.render(), 1000)
          }
}

let anotherClock = new AnotherClock({input: 'h:m:s'});
anotherClock.start();