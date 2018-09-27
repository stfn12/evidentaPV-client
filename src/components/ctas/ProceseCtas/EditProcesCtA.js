import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const EditProcesCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Cauta PV</Card.Header>
      <Link to="/procese/edit">
        <Icon name="search" size="massive"/>
      </Link>
    </Card.Content>
  </Card>
);

export default EditProcesCtA;