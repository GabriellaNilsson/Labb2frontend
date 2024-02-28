import React, { useState, useEffect } from "react";
import portfolio from "../css/portfolio.css";
// import { ClipLoader } from "react-spinners";
import GridLoader from "react-spinners/GridLoader";


export default function Portfolio() {
    const url = 'https://api.github.com/users/gabriellanilsson/repos';
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)

        }, 1100)
    }, [])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [url]);
    
    return (
        <div>
            <h1>My Projects</h1>
            {
                loading ?
                <GridLoader 
                color={'#FFFFFF'} loading={loading} size={30} />
                :
                <main className="container">
                <section className="repoCard">
                    {repos.map((repo) => (
                        <div key={repo.id} className="card">
                            <div className="classText">
                            <p>Name of project: {repo.name}</p>
                            <p>Language: {repo.language}</p>
                            <p>Description: {repo.description}</p>
                            <p>Date of creation: {repo.created_at}</p>
                            <p style={{textAlign: "center;"}}></p>
                            <a className="button" href={repo.html_url}>Link to repository</a>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            }
        </div>
    );
};
   
    