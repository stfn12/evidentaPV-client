import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const AddProcesCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Adauga PV</Card.Header>
      <Link to="/procese/new">
        <Icon name="plus circle" size="massive"/>
      </Link>
    </Card.Content>
  </Card>
);

export default AddProcesCtA;