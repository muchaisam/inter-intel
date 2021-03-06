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

class MyView3 extends LitElement {
  static get properties() {
    return {
      data: { type: Array }
    }
  }

  constructor() {
    super();
    this.data = [];
  }

  firstUpdated(changedProperties) {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((r) => r.json())
      .then((r) => {
        this.data = r.results;
      });
  }

  render() {
    return html`
        <ul>
          ${this.data.map(
            (todo) => html`
            <li>${todo.userd}</li>
            <li>${todo.id}</li>
            <li>${todo.title}</li>
            <li>${todo.completed}</li>
          `)}
        </ul>
      `;
  }
}
customElements.define('my-view3', MyView3);
