import React, {useEffect, useState} from "react";

export default function Home() {
  
  // Change background color easter egg 
  
  const [color, setColor] = useState();
  const click = color => {
    setColor(color)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color])
    
// Modal popup easter egg

const [showModal, setShowModal] = useState(false);

const handleCombinationInput = (e) => {
  const inputValue = e.target.value;

  if (inputValue === '1925') {
    setShowModal(true);
  } else {
    setShowModal(false);
  }
};

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
  <button className="change-color-btn" onClick={() => click("yellow")}>
  🐰🥚
</button>
 <form>
  <input 
  className = "numbersInput" 
  type="text" 
  placeholder="Enter number combination 1925 for a surprise"
  onChange={handleCombinationInput}
  />
 </form>
 {showModal && (
            <div className="modal">
              <p>Why did the computer go to therapy?</p>
              <p>It had too many bytes of emotional baggage!</p>
              <button className="close-btn" onClick={() => setShowModal(false)}>Close Modal</button>
            </div>
        )}
  </div>
);
};

