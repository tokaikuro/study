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
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [total, setTotal] = useState(0);
  const [nanka, setNanka] = useState(0);
  const [nenka, setNenka] = useState(0);

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
    setFirst(0);
    setSecond(0);
    setNanka(0);
    setTotal(0);
    setNenka(0);
  };

  const handlplusClick = () => {
    setNanka(1);
    setNenka(0);
  };
  const handlminuClick = () => {
    setNanka(2);
    setNenka(0);
  };
  const handlastClick = () => {
    setNanka(3);
    setNenka(0);
  };
  const handlsuraClick = () => {
    setNanka(4);
    setNenka(0);
  };

  const handlaClick = () => {
    a = 1;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+a);
        setNenka(+a);
      } else {
        setFirst(first * 10 + a);
        setNenka(first * 10 + a);
      }
    } else {
      if (second === 0) {
        setSecond(+a);
        setNenka(+a);
      } else {
        setSecond(second * 10 + a);
        setNenka(second * 10 + a);
      }
    }
  };
  const handlbClick = () => {
    b = 2;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+b);
        setNenka(+b);
      } else {
        setFirst(first * 10 + b);
        setNenka(first * 10 + b);
      }
    } else {
      if (second === 0) {
        setSecond(+b);
        setNenka(+b);
      } else {
        setSecond(second * 10 + b);
        setNenka(second * 10 + b);
      }
    }
  };
  const handlcClick = () => {
    c = 3;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+c);
        setNenka(+c);
      } else {
        setFirst(first * 10 + c);
        setNenka(first * 10 + c);
      }
    } else {
      if (second === 0) {
        setSecond(+c);
        setNenka(+c);
      } else {
        setSecond(second * 10 + c);
        setNenka(second * 10 + c);
      }
    }
  };
  const handldClick = () => {
    d = 4;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+d);
        setNenka(+d);
      } else {
        setFirst(first * 10 + d);
        setNenka(first * 10 + d);
      }
    } else {
      if (second === 0) {
        setSecond(+d);
        setNenka(+d);
      } else {
        setSecond(second * 10 + d);
        setNenka(second * 10 + d);
      }
    }
  };
  const handleClick = () => {
    e = 5;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+e);
        setNenka(+e);
      } else {
        setFirst(first * 10 + e);
        setNenka(first * 10 + e);
      }
    } else {
      if (second === 0) {
        setSecond(+e);
        setNenka(+e);
      } else {
        setSecond(second * 10 + e);
        setNenka(second * 10 + e);
      }
    }
  };
  const handlfClick = () => {
    f = 6;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+f);
        setNenka(+f);
      } else {
        setFirst(first * 10 + f);
        setNenka(first * 10 + f);
      }
    } else {
      if (second === 0) {
        setSecond(+f);
        setNenka(+f);
      } else {
        setSecond(second * 10 + f);
        setNenka(second * 10 + f);
      }
    }
  };
  const handlgClick = () => {
    g = 7;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+g);
        setNenka(+g);
      } else {
        setFirst(first * 10 + g);
        setNenka(first * 10 + g);
      }
    } else {
      if (second === 0) {
        setSecond(+g);
        setNenka(+g);
      } else {
        setSecond(second * 10 + g);
        setNenka(second * 10 + g);
      }
    }
  };
  const handlhClick = () => {
    h = 8;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+h);
        setNenka(+h);
      } else {
        setFirst(first * 10 + h);
        setNenka(first * 10 + h);
      }
    } else {
      if (second === 0) {
        setSecond(+h);
        setNenka(+h);
      } else {
        setSecond(second * 10 + h);
        setNenka(second * 10 + h);
      }
    }
  };
  const handliClick = () => {
    i = 9;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+i);
        setNenka(+i);
      } else {
        setFirst(first * 10 + i);
        setNenka(first * 10 + i);
      }
    } else {
      if (second === 0) {
        setSecond(+i);
        setNenka(+i);
      } else {
        setSecond(second * 10 + i);
        setNenka(second * 10 + i);
      }
    }
  };
  const handljClick = () => {
    if (nanka === 0) {
      setFirst(first * 10);
      setNenka(first * 10);
    } else {
      setSecond(second * 10);
      setNenka(second * 10);
    }
  };

  const handltotalClick = () => {
    setNenka(0);
    if (nanka === 1) {
      setTotal(first + second);
      setNenka(first + second);
    } else if (nanka === 2) {
      setTotal(first - second);
      setNenka(first - second);
    } else if (nanka === 3) {
      setTotal(first * second);
      setNenka(first * second);
    } else if (nanka === 4) {
      setTotal(first / second);
      setNenka(first / second);
    } else {
      setTotal(0);
      setNenka(0);
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
      <div>{nenka}</div>
    </body>
  );
}
