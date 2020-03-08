import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';

const footer = () => {
    return ( 
        <footer className="footer">
          <div className="content has-text-centered social-container has-text-primary">
                <a
                  href="https://www.youtube.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/" 
                  target="_blank" rel="noopener noreferrer"
                  className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <h3>Copyright
                  <span>&#169; </span> 
                  {new Date().toLocaleDateString()} 
                  @webfabrics.co.uk
                </h3>

                <p>
                  <strong>App</strong> by -
                  <a href="https://sungharsh.github.io/" target="_blank" rel="noopener noreferrer">
                    Sungharsh</a>. The source code is licensed 
                  <a 
                  href="http://opensource.org/licenses/mit-license.php" target="_blank" rel="noopener noreferrer">
                  . MIT
                  </a> 
                  . The website content is licensed 
                  <a 
                  href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
                  . CC BY JS WF 5.0
                  </a>.
                </p>
          </div>
          </footer>
     );
}
export default footer;