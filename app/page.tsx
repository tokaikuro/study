import React, { useState } from "react";
import "/study.css";

export default function Home() {
  return (
    <body>
      <section className="reaut">
        <div className="box1">
          <button id="button1" type="button">
            1
          </button>
        </div>
        <div className="box1">
          <button id="button2" type="button">
            2
          </button>
        </div>
        <div className="box1">
          <button id="button3" type="button">
            3
          </button>
        </div>
        <div className="box1">
          <button id="buttonc" type="button">
            c
          </button>
        </div>
        <div className="box1">
          <button id="button4" type="button">
            4
          </button>
        </div>
        <div className="box1">
          <button id="button5" type="button">
            5
          </button>
        </div>
        <div className="box1">
          <button id="button6" type="button">
            6
          </button>
        </div>
        <div className="box1">
          <button id="button=" type="button">
            =
          </button>
        </div>
        <div className="box1">
          <button id="button7" type="button">
            7
          </button>
        </div>
        <div className="box1">
          <button id="button8" type="button">
            8
          </button>
        </div>
        <div className="box1">
          <button id="button9" type="button">
            9
          </button>
        </div>
        <div className="box1">
          <button id="button+" type="button">
            +
          </button>
        </div>
        <div className="box1">
          <button id="button0" type="button">
            0
          </button>
        </div>
        <div className="box1">
          <button id="button*" type="button">
            *
          </button>
        </div>
        <div className="box1">
          <button id="button/" type="button">
            /
          </button>
        </div>
        <div className="box1">
          <button id="button-" type="button">
            -
          </button>
        </div>
      </section>
      <div id="display">0</div>
    </body>
  );
}
