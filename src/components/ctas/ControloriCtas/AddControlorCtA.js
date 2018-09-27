import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const AddControlorCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Adauga controlor</Card.Header>
      <Link to="/controlori/new">
        <Icon name="plus circle" size="massive"/>
      </Link>
    </Card.Content>
  </Card>
);

export default AddControlorCtA;