import React from "react";
import "./footer.css"

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

        </div>
    
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Recipr | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;