/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';
import './shared.js';


class MyElement extends LitElement {
  static get properties() {
    return {
      data: { type: Array }
    };
  }

  constructor() {
    super();
    this.data = [
      {
        url:
          "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "The Deer Park",
        content: "Bring lots of carrots to feed the deers.",
        location:
          ""
      },
      {
        url:
          "https://images.unsplash.com/photo-1595146463222-19603449c6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
        title: "ARoS Aarhus Kunstmuseum",
        content:
          "ARoS is the main art museum in Aarhus.",
        location:
          ""
      },

      {
        url:
          "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "Botanical Garden",
        content: "One of the largest parks in Aarhus",
        location:
          ""
      }
    ];
  }

  static get styles() {
    return css`
      .cards {
        width: 100%;
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card {
        display: flex;
        flex-direction: column;
        border: 1px solid #e6ebef;
        border-radius: 15px;  
      }
      .card .title {
        width: 100%;
        margin: 0;
        text-align: center;
        margin-top: 30px;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 4px;
     }
     
     .card .text {
        width: 80%;
        margin: 0 auto;
        font-size: 13px;
        text-align: center;
        margin-top: 20px;
        color: white;
        font-weight: 200;
        letter-spacing: 1px;
        opacity: 0;
        max-height:0;
        transition: all 0.3s ease;
     }
     
     .card:hover {
        height: 270px;
     }
     
     .card:hover .text {
        transition: all 0.3s ease;
        opacity: 1;
        max-height:40px;
     }
      .card__image {
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 15px;
      }
      .card__body {
        padding: 15px 20px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }

      .card__button {
        display: block;
        awidth: 250px;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
        text-decoration: none;
        background: #333;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 3px solid #333;
        transition: all .35s;
        border-radius: 10px;
      }
      .card__button:hover {
        background: dodgerblue;
        color : white;
      }
    `;
  }
  render() {
    return html`
      <ul class="cards">
        ${this.data.map(
      (card) => html`
            <li class="card">
              <img class="card__image" src="${card.url}" alt="${card.title}" />
              <div class="card__body">
                <h5 class="card__title">${card.title}</h5>
                <p class="card__text">${card.content}</p>
                <a
                  class="card__button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="${card.location}"
                >
                  Check location
                </a>
              </div>
            </li>
          `
    )}
      </ul>
    `;
  }
}


customElements.define('my-element', MyElement);
