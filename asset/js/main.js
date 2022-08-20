const text = document.querySelector(".text");
const background = document.querySelector(".background-img");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  text.innerText = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  console.log(
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
