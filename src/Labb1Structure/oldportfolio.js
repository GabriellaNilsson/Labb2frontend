    <main>
        <div className="border">
          <div className="project-container">
            <div className="project-item">
              <img className="project-image" src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Postgres_Query.jpg" alt="Picture of database" />
              <a href="#popup1" className="button">Database project</a>
            </div>
            <div className="project-item">
              <img className="project-image" src="https://www.freecodecamp.org/news/content/images/2023/02/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt="Picture of C# code" />
              <a href="#popup2" className="button">C# Group Project</a>
            </div>
            <div className="project-item">
              <img className="project-image" src="https://zoo-granby.transforms.svdcdn.com/production/animals/Zoo-de-Granby_Lion-dAfrique_13.jpg?w=2048&h=1365&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.3806&fp-y=0.4229&dm=1679339702&s=1a071d1ad3d14ff44c66705882992fd8" alt="Picture of lion in a zoo" />
              <a href="#popup3" className="button">Zoo project</a>
            </div>
          </div>
        </div>
      </main> 
      <div className="popup-container">
        <div className="popup" id="popup1">
          <div className="popup-inner">
            <h2>Database project</h2>
            <p>I created a database for a fictional school using SQL Server Management Studio (SSMS) and employed the 'Database First' methodology. I connected the database to Visual Studio (VS) and further worked on its functions using the Entity Framework.</p>
            <p>In the database, one could access information about all students, including their names, classes and grades. One could also see info about the staff, their positions, salaries, and tenure at the school. Users had the capability to add new staff and students, assign grades to students.</p>
            <a href="#" className="button">Close</a>
          </div>
        </div>
        <div className="popup" id="popup2">
          <div className="popup-inner">
            <h2>C# Group Project</h2>
            <p>Collaborating with a few other students, I undertook the creation of a banking system in C# over a span of two weeks. The system encompasses features such as user authentication, deposit and transfer functionalities, transaction history viewing, limited loan capabilities, comprehensive account management, and support for accounts in various currencies.</p>
            <a href="#" className="button">Close</a>
          </div>
        </div>
        <div className="popup" id="popup3">
          <div className="popup-inner">
            <h2>Zoo project</h2>
            <p>I undertook a school assignment centered around inheritance in C#, wherein the task was to create a 'zoo.' The assignment required the establishment of a base class, 'animal,' with shared properties and methods that inheriting classes, representing different animals, would derive. Subsequently, these inheriting classes, or animals, were to possess unique characteristics defining them. Among the animals included were owl, fox, and cat. Further, the cat class was subdivided into two new classes, representing distinct cat breeds: Siamese and Scottish Fold.</p>
            <a href="#" className="button">Close</a>
          </div>
        </div>
      </div>