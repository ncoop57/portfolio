import _ from 'lodash';
import React from 'react';
import { Card, CardImg, CardBody, CardTitle,
  CardSubtitle, Button } from 'reactstrap';

const Project = (props) => {
  const { name, full_name, url } = props;
  const icon_src = `https://raw.githubusercontent.com/${full_name}/master/icon.png`;
  return (
    <Card className = "project shadow p-3">
      <CardImg
        top width = "100%"
        src = { icon_src }
        onError = { (e) => { e.target.src = "images/default.png" } }
        alt = "Project Icon" />
      <CardBody>
        <CardTitle>{ _.startCase(_.camelCase(name)) }</CardTitle>
        <Button className = "shadow" color = "primary" href = { url }>View Repo</Button>
      </CardBody>
    </Card>
  );
}

export default Project;