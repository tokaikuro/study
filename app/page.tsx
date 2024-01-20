"use client";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setNenka(first);
  }, [first]);

  useEffect(() => {
    setNenka(second);
  }, [second]);

  useEffect(() => {
    setNenka(total);
  }, [total]);

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
      } else {
        setFirst(first * 10 + a);
      }
    } else {
      if (second === 0) {
        setSecond(+a);
      } else {
        setSecond(second * 10 + a);
      }
    }
  };
  const handlbClick = () => {
    b = 2;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+b);
      } else {
        setFirst(first * 10 + b);
      }
    } else {
      if (second === 0) {
        setSecond(+b);
      } else {
        setSecond(second * 10 + b);
      }
    }
  };
  const handlcClick = () => {
    c = 3;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+c);
      } else {
        setFirst(first * 10 + c);
      }
    } else {
      if (second === 0) {
        setSecond(+c);
      } else {
        setSecond(second * 10 + c);
      }
    }
  };
  const handldClick = () => {
    d = 4;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+d);
      } else {
        setFirst(first * 10 + d);
      }
    } else {
      if (second === 0) {
        setSecond(+d);
      } else {
        setSecond(second * 10 + d);
      }
    }
  };
  const handleClick = () => {
    e = 5;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+e);
      } else {
        setFirst(first * 10 + e);
      }
    } else {
      if (second === 0) {
        setSecond(+e);
      } else {
        setSecond(second * 10 + e);
      }
    }
  };
  const handlfClick = () => {
    f = 6;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+f);
      } else {
        setFirst(first * 10 + f);
      }
    } else {
      if (second === 0) {
        setSecond(+f);
        setNenka(+f);
      } else {
        setSecond(second * 10 + f);
      }
    }
  };
  const handlgClick = () => {
    g = 7;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+g);
      } else {
        setFirst(first * 10 + g);
      }
    } else {
      if (second === 0) {
        setSecond(+g);
      } else {
        setSecond(second * 10 + g);
      }
    }
  };
  const handlhClick = () => {
    h = 8;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+h);
      } else {
        setFirst(first * 10 + h);
      }
    } else {
      if (second === 0) {
        setSecond(+h);
      } else {
        setSecond(second * 10 + h);
      }
    }
  };
  const handliClick = () => {
    i = 9;
    if (nanka === 0) {
      if (first === 0) {
        setFirst(+i);
      } else {
        setFirst(first * 10 + i);
      }
    } else {
      if (second === 0) {
        setSecond(+i);
      } else {
        setSecond(second * 10 + i);
      }
    }
  };
  const handljClick = () => {
    if (nanka === 0) {
      setFirst(first * 10);
    } else {
      setSecond(second * 10);
    }
  };

  const handltotalClick = () => {
    setNenka(0);
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
    <body className="reiaut">
      <div className="box2">{nenka}</div>
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
          <button onClick={handlccClick}>AC</button>
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
    </body>
  );
}
