import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Contactus extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="fonts" style={{ fontFamily: "Capriola" }}>
          Please Feel Free to Contact US!!
        </h1>

        <p
          style={{
            color: "black",
            fontFamily: "Sorts Mill Goudy",
            fontSize: 28,
            marginTop: 25,
            marginBottom: 38,
          }}
        >
          We are Currently Developing the Website Version of Our Product. Till
          Than You can Enjoy our App from Playstore
        </p>

        <SocialIcon url="http://linkedin.com" />
        <SocialIcon url="http://facebook.com" />
        <SocialIcon url="http://pinterest.com" />
        <SocialIcon url="http://vimeo.com" />
        <SocialIcon url="http://twitter.com" />
        <SocialIcon url="http://playstore.com" />
        <h3
          style={{ fontFamily: "Dancing Script", fontSize: 30, marginTop: 12 }}
        >
          -Lazy Team
        </h3>
      </div>
    );
  }
}

export default Contactus;
