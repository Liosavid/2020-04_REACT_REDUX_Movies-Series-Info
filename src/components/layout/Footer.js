import React from 'react';


const Footer = () => {

        return(

            <div className="footer container-fluid footer-row">
            <div className="row ">
              <div className="col-md-12">
                <div className="footer p-3 mt-4 text-center bg-dark text-light">
                  Developed by:&nbsp;
                  <span className="text-warning font-weight-normal">
                    Lionel Savidan
                  </span>
                  , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                  integrated with external movies data API&nbsp;
                  <a
                    href="http://www.omdbapi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OMDB
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
    
}

export default Footer;