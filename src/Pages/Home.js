import React, {useEffect, useState} from "react";

export default function Home() {
  
  // Change background color easter egg 
  
  const [columnColor, setColumnColor] = useState();
  const originalColor = "rgba(0, 0, 0, 0.99)";

  const click = (color) => {
    if (color === columnColor) {
      setColumnColor(originalColor);
    } else {
      setColumnColor(color);
    }
  };

  useEffect(() => {
    document.querySelectorAll(".column").forEach((element) => {
      element.style.backgroundColor = columnColor;
    });
  }, [columnColor]);

  // Modal popup easter egg

  function handleCombinationInput() {
    const numbersInput = '1925';
    let checkInput = '';
  
    document.addEventListener('keydown', function (e) {
      checkInput += e.key;
  
      if (checkInput.endsWith(numbersInput)) {
        console.log('Activated');
        document.getElementById('easterEgg').style.visibility = 'visible';
        document.getElementById('easterEgg').style.opacity = '100%';
        document.body.style.backgroundColor = 'black';
  
        const closeButton = document.getElementById('close');
  
        function closeModal() {
          document.getElementById('easterEgg').style.visibility = 'hidden';
          checkInput = '';
        }
  
        closeButton.addEventListener('click', closeModal);
      }
    });
  }
handleCombinationInput();


return(
  <div>

<div id="easterEgg">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ppm5_AGtbTo" title="YouTube video"></iframe>
    <button id="close">Close</button>
  </div>

  <header>
          <h1 className="change-color-btn" onClick={() => click("white")}>Home page</h1>
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
    </section>
  </main>
 <form>
 </form>
  </div>
);
};

