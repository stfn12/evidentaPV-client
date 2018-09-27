import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const EditControlorCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Cauta controlor</Card.Header>
      <Link to="/controlori/edit">
        <Icon name="search" size="massive"/>
      </Link>
    </Card.Content>
  </Card>
);

export default EditControlorCtA;