import React from "react";
import about from "../css/about.css";
import aboutmepic from "../Components/aboutme-pic.jpg";

export default function About() {
    return(
        <div>
            <header>
                <h1>About me</h1>
            </header>
            <img className="image" src={aboutmepic} alt="Picture of me and one of my cats" />
        <main>
        <section>
           <div className="aboutme-text-border">
              <header>
               <h2>Hello!</h2>
             </header>
              <p className="p-aboutme">My name is Gabriella Nilsson. I was born and raised in the county of Dalarna. In 2021, I moved to the city of Hudiksvall, where I now live with my partner and two cats. I'm currently studying to become a software engineer at Edugrade AB in Hudiksvall. My biggest hobbies are gaming, vintage and programming, but I also enjoy sewing, baking, studying languages (linguistics), delving history and reading books. I've studied German, both in Germany and in Sweden, at Uppsala University. Additionally, I pursued Korean language studies in Seoul, South Korea. After returning to Sweden, I took a Korean course at Stockholm University. My current goal is to complete my education and learn as much as possible.</p>
            </div>
          </section>
        </main>
        </div>
    );
}