import React from "react";
// import one from "./Images/1.png";
import two from "./Images/2.png";
import three from "./Images/3.png";
import four from "./Images/4.png";
import onee from "./Images/footer1.png";
import five from "./Images/footer5.png";
const Footer = () => {
  return (
    <footer>
      {" "}
      <div class="socialMedias mt-5 mb-3">
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={onee} className="foot" />
        </a>{" "}
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={two} className="foot" />
        </a>
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={three} className="foot" />
        </a>
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={four} className="foot" />
        </a>
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={five} className="foot" />
        </a>
      </div>
      <p className="para mb-3 mt-4 marc" style={{ textAlign: "center" }}>
        © rise of mars, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
