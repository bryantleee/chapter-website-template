import React from 'react';
import { Card, CardBody } from 'reactstrap';
import ActionButton from '../actionButton';
import ContentBlock from '../ContentBlock';

function ProjectCard({ title, thumbnail, urlSlug, description }) {
  return (
    <>
      <Card className="bg-light mb-3 project-card h-100" style={{ height: '100%' }}>
        <img className="card-img-top" src={thumbnail.url} alt={thumbnail.description} />
        <CardBody>
          <h3 className="text-title card-title text-center">{title}</h3>
          <div className="text-center">
            <ContentBlock content={description.json} />
          </div>
          <div className="text-center action-btn-box">
            <ActionButton white text="Read More" link={`/projects/${urlSlug}`} />
          </div>
        </CardBody>
      </Card>
      <style jsx>{`
        .action-btn-box {
          margin-top: 30px;
        }
        .project-card:hover {
          box-shadow: 0 5px 30px rgba(44, 62, 80, 0.1);
        }
        .project-card {
          border: none;
          height: 100% !important;
        }
      `}</style>
    </>
  );
}

export default ProjectCard;
