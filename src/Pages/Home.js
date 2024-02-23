import React from "react";
import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <header>
                <h1>Home page</h1>
            </header>
            <main>
          <section>
            <div className="main-container">
              <div className="column">
                <div className="content">
                  <h2>Column 1</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam eveniet velit ex saepe provident incidunt debitis
                    nemo, quae, doloremque fugiat amet similique aspernatur quas
                    assumenda blanditiis quis est minima quaerat?
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Column 2</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam eveniet velit ex saepe provident incidunt debitis
                    nemo, quae, doloremque fugiat amet similique aspernatur quas
                    assumenda blanditiis quis est minima quaerat?
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Column 3</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam eveniet velit ex saepe provident incidunt debitis
                    nemo, quae, doloremque fugiat amet similique aspernatur quas
                    assumenda blanditiis quis est minima quaerat?
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </section>
        </main>
        </div>
    );
}