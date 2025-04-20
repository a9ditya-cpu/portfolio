import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Raj Sinha </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently a Student.
            <br />
            I am pursuing my Bachelors in Computer Applications (BCA) in AI and Data Science at K.R.Mangalam University,
            Gurugram.
            <br />
            <br />
            Apart from coding, some other activities that I love to!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Study History
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology isn't just about innovation,
            It's about the impact!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
