import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="https://commons.wikimedia.org/wiki/Main_Page">
            Wikimedia Commons
          </a>
          and in the public domain
        </p>
      </div>
    </div>
  );
};

export default Footer;
