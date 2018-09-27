import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const AddChitantaCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Adauga chitanta</Card.Header>
      <Link to="/chitante/new">
        <Icon name="plus circle" size="massive"/>
      </Link>
    </Card.Content>
  </Card>
);

export default AddChitantaCtA;