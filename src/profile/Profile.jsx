import React, {lazy, Suspense,} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCoffee, faLaptopCode, faTerminal, faCode, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import './profile.css';

const ShowAvator = lazy(() => import( "./Avatar" ) );


const userData = {
    name: 'Sungharsh on code',
    location:' London',
    foodType: ' Vegan',
    likes: ' Coding into the wee hours of the evening',
    github: 'Sungharsh',
    //avatar: 'https://avatars1.githubusercontent.com/u/11149124?v=4',
    Quote: ' “Anything is possible when you have inner peace”',
    email: ' webfabricsuk@gmail.com'
}

const Profile = () => {
        return ( 
           <div className="columns level">

            <div className="column media-content has-text-centered">
              <p><strong>
                <FontAwesomeIcon icon={faTerminal} size={"2x"} className="icon"/>
                   Pro-Dev
              </strong></p>
              <br />
              <Suspense fallback={<h1>...Loding</h1>} >
                <ShowAvator />
              </Suspense>
            </div>
            <div className="column is-three-quarters-mobile is-two-thirds-tablet is-three-quarters-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <div className="user-details media-content sectionTwo">
                <h3 className="title">{userData.name}</h3>

                <p className="subtitle">
                    <FontAwesomeIcon icon={faHome} size={"2x"} className="icon"/>
                    {userData.location}
                </p>

                <p className="subtitle">
                    <FontAwesomeIcon icon={faCoffee} size={"2x"} className="icon"/>
                    {userData.foodType}
                </p>

                <p className="subtitle">
                    <FontAwesomeIcon icon={faLaptopCode} size={"2x"} className="icon"/>
                    {userData.likes}
                </p>

                <p className="subtitle">
                    <FontAwesomeIcon icon={faCode} size={"2x"} className="icon"/>
                    {userData.Quote}
                </p>

                <p className="subtitle">
                &nbsp;<FontAwesomeIcon icon={faMailBulk} size={"2x"}  className="icon" />
                    {userData.email}
                </p>

                <p>
                <a className="github-box is-link" href="https://sungharsh.github.io/"  target="_blank" rel="noopener noreferrer">
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faGithubSquare} size={"2x"}  className="icon link" />&nbsp;&nbsp;&nbsp;&nbsp;     
                {"Visit my Profile: " + userData.github}
                </a>
                </p>

                </div>
            </div>
          </div>
         );
}
export default Profile;