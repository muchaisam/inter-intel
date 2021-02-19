/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from 'lit-element';
import './shared-styles.js';

class MyView1 extends LitElement {
  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">

      <section class="hero is-primary is-large">
          <div class="hero-body">
              <div class="container">
                <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
                    <div class="column">
                        <form class="box">

                        <div class="field">
                                <label class="label">Name</label>
                                <div class="control has-icons-left">
                                    <input type="text" class="input" placeholder="e.g. Sammy">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Phone Number</label>
                                <div class="control has-icons-left">
                                    <input type="number" class="input" placeholder="e.g. 0712345678">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-number"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control has-icons-left">
                                    <input type="email" class="input" placeholder="e.g. muchai@gmail.com">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" class="input" placeholder="*********" required>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <div class="field">
                                <button onclick="submit">
                                    Login
                                </button>
                                <script>
                                function myFunction() {
                                    alert("");
                                }
                                </script>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
          </div>
      </section>
    `;
  }
}

customElements.define('my-view1', MyView1);
