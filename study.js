document.addEventListener("DOMContentLoaded", function () {
  const a = document.getElementById("button1");
  const b = document.getElementById("button2");
  const c = document.getElementById("button3");
  const cc = document.getElementById("buttonc");
  const d = document.getElementById("button4");
  const e = document.getElementById("button5");
  const f = document.getElementById("button6");
  const ico = document.getElementById("button=");
  const g = document.getElementById("button7");
  const h = document.getElementById("button8");
  const i = document.getElementById("button9");
  const plus = document.getElementById("button+");
  const j = document.getElementById("button0");
  const asta = document.getElementById("button*");
  const sura = document.getElementById("button/");
  const mai = document.getElementById("button-");
  const display = document.getElementById("display");

  a.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "1";
    } else {
      display.textContent += "1";
    }
  });
  b.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "2";
    } else {
      display.textContent += "2";
    }
  });
  c.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "3";
    } else {
      display.textContent += "3";
    }
  });
  d.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "4";
    } else {
      display.textContent += "4";
    }
  });
  e.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "5";
    } else {
      display.textContent += "5";
    }
  });
  f.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "6";
    } else {
      display.textContent += "6";
    }
  });
  g.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "7";
    } else {
      display.textContent += "7";
    }
  });
  h.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "8";
    } else {
      display.textContent += "8";
    }
  });
  i.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "9";
    } else {
      display.textContent += "9";
    }
  });
  j.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "0";
    } else {
      display.textContent += "0";
    }
  });
});
