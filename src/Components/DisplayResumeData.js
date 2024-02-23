import React from 'react';
import resumedata from "../Components/resumedata.json";

// Educations
const DisplayResumeData = () => {
    return (
        <div>
            <div>
            <h1>My Educations</h1>
            <ul>
                {resumedata.education.map((educations) => (
                    <li key={educations.id}>
                        <h2>Description: {educations.description}</h2>
                        <p>Id: {educations.id}</p>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
            <h1>My Skills</h1>
            <ul>
             {resumedata.skills.map((skill) => (
                 <li key={skill.id}>
                     <h2>Description: {skill.description}</h2>
                     <p>Category: {skill.category}</p>
                 </li>
                 ))}
             </ul>
         </div>
         <h1>Misc</h1>
            <ul>
             {resumedata.misc.map((miscs) => (
                 <li key={miscs.id}>
                     <h2>Description: {miscs.description}</h2>
                 </li>
                 ))}
             </ul>
         </div>
    );
};

export default DisplayResumeData;
