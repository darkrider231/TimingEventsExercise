// Timing Events Exercise

// 1
setTimeout(() => {
    const div = document.querySelector(`#first`);
    const p = document.createElement(`p`);
    p.innerText = `Hi`;
    div.append(p);
  }, 1000);

//   // 2
  setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    // Function runs 4 seconds after the page loads (1 second after the `1st Example 3 Element` function runs)
    setTimeout(() => {
      const div3 = document.querySelector(`#timeout-nesting`);
      const p3 = document.createElement(`p`);
      p3.innerText = `Two`;
      div3.append(p3);
    }, 1000);
  }, 3000);

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
    p4.innerText = time;
    div4.append(p4);
}, 1000);

const stopped = document.querySelector(`button`);
stopped.addEventListener(`click`, () => {
    clearInterval(stop);
});
