import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url}) => {
  return (
    <Col size={12} sm={6} md={6}>
      <a href={url}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
