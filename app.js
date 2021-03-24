// Timing Events Exercise

// 1
setTimeout(() => {
    const div = document.querySelector(`#first`);
    const p = document.createElement(`p`);
    p.innerText = `Hi`;
    div.append(p);
  }, 1000);

// 2
// Function runs 1 second after the page loads (1 second after the `One` function runs)
  setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    // Function runs 3 seconds after the page loads (1 second after the `Two` function runs)
    setTimeout(() => {
      const div3 = document.querySelector(`#timeout-nesting`);
      const p3 = document.createElement(`p`);
      p3.innerText = `Two`;
      div3.append(p3);
    }, 1000);
  }, 2000);

// 3a
let time = 0;
setInterval(() => {
  console.log(time);
  time++;
}, 1000);

// 3b
const stop = setInterval(() => {
    const div4 = document.querySelector(`#countdown`);
    const p4 = document.createElement(`p`);
    // p4.innerText = time;
    div4.append(p4);
}, 1000);

const stopped = document.querySelector(`button`);
stopped.addEventListener(`click`, () => {
    clearInterval(stop);
});

// BONUS
// 4
const div5 = document.querySelector(`#countdown`);
const p5 =  document.createElement(`p`);
p5.innerText = `2:00`;
div5.append(p5);
let startingSeconds = 120;
const countdown = setInterval(() => {
  startingSeconds--;
  const minutes = Math.floor(startingSeconds / 60);
  const seconds = startingSeconds % 60;
  // p5.innerText = `${minutes}:${seconds}`;

  if(seconds < 10){
    p5.innerText = `${minutes}:0${seconds}`;
  } else {
    p5.innerText = `${minutes}:${seconds}`;
  }

  // Using a ternary
  // p5.innerText = (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

  if (startingSeconds === 0){
    p5.innerText = `TIME IS UP`;
    clearInterval(countdown);
  }
}, 1000);
