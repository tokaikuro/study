"use client";
import React, { useState } from "react";
import "/study.css";

export default function MyComponent() {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 0;
  var f = 0;
  var g = 0;
  var h = 0;
  var i = 0;
  var j = 0;
  var first = 0;
  var second = 0;
  const [total, setTotal] = useState(0);
  var nanka = 0;

  const handlccClick = () => {
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    j = 0;
    first = 0;
    second = 0;
    nanka = 0;
    setTotal(0);
  };

  const handlplusClick = () => {
    nanka = 1;
  };
  const handlminuClick = () => {
    nanka = 2;
  };
  const handlastClick = () => {
    nanka = 3;
  };
  const handlsuraClick = () => {
    nanka = 4;
  };

  const handlaClick = () => {
    a = 1;
    if (nanka === 0) {
      first += a;
    } else {
      second += a;
    }
  };
  const handlbClick = () => {
    b = 2;
    if (nanka === 0) {
      first += b;
    } else {
      second += b;
    }
  };
  const handlcClick = () => {
    c = 3;
    if (nanka === 0) {
      first += c;
    } else {
      second += c;
    }
  };
  const handldClick = () => {
    d = 4;
    if (nanka === 0) {
      first += d;
    } else {
      second += d;
    }
  };
  const handleClick = () => {
    e = 5;
    if (nanka === 0) {
      first += e;
    } else {
      second += e;
    }
  };
  const handlfClick = () => {
    f = 6;
    if (nanka === 0) {
      first += f;
    } else {
      second += f;
    }
  };
  const handlgClick = () => {
    g = 7;
    if (nanka === 0) {
      first += g;
    } else {
      second += g;
    }
  };
  const handlhClick = () => {
    h = 8;
    if (nanka === 0) {
      first += h;
    } else {
      second += h;
    }
  };
  const handliClick = () => {
    i = 9;
    if (nanka === 0) {
      first += i;
    } else {
      second += i;
    }
  };
  const handljClick = () => {
    if (nanka === 0) {
      first += j;
    } else {
      second += j;
    }
  };

  const handltotalClick = () => {
    if (nanka === 1) {
      setTotal(first + second);
    } else if (nanka === 2) {
      setTotal(first - second);
    } else if (nanka === 3) {
      setTotal(first * second);
    } else if (nanka === 4) {
      setTotal(first / second);
    } else {
      setTotal(0);
    }
  };

  return (
    <body>
      <section className="reaut">
        <div className="box1">
          <button onClick={handlaClick}>1</button>
        </div>
        <div className="box1">
          <button onClick={handlbClick}>2</button>
        </div>
        <div className="box1">
          <button onClick={handlcClick}>3</button>
        </div>
        <div className="box1">
          <button onClick={handlccClick}>c</button>
        </div>
        <div className="box1">
          <button onClick={handldClick}>4</button>
        </div>
        <div className="box1">
          <button onClick={handleClick}>5</button>
        </div>
        <div className="box1">
          <button onClick={handlfClick}>6</button>
        </div>
        <div className="box1">
          <button onClick={handltotalClick}>=</button>
        </div>
        <div className="box1">
          <button onClick={handlgClick}>7</button>
        </div>
        <div className="box1">
          <button onClick={handlhClick}>8</button>
        </div>
        <div className="box1">
          <button onClick={handliClick}>9</button>
        </div>
        <div className="box1">
          <button onClick={handlplusClick}>+</button>
        </div>
        <div className="box1">
          <button onClick={handljClick}>0</button>
        </div>
        <div className="box1">
          <button onClick={handlastClick}>*</button>
        </div>
        <div className="box1">
          <button onClick={handlsuraClick}>/</button>
        </div>
        <div className="box1">
          <button onClick={handlminuClick}>-</button>
        </div>
      </section>
      <div>{total}</div>
    </body>
  );
}
