import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const fileName = "shubham latest.pdf"
const fileUrl = "https://www.dropbox.com/scl/fi/h2h4mxbeh8zmmc7p355q8/shubham-latest.pdf?rlkey=ncvetlqghcduyzsl60lopidyu&st=u1jp1iek&dl=1"

const handleDownload = ()=>{
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
}

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h4 className="title footer-title">iPortfolio</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a className="x-logo-a download" onClick={handleDownload}>
                <i className="fa-solid fa-download x-logo"></i>
              </a>
              <a href="https://www.linkedin.com/in/shubham-tiwari-01a338308/">
                <img src={navIcon1} alt="" />
              </a>
              <a className="x-logo-a" href="https://x.com/tiwari_shubh15">
                <i className="fa-brands fa-x-twitter x-logo"></i>
              </a>
              <a href="https://www.instagram.com/shubh_tiwari_pandit/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
