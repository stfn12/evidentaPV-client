import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const EditChitantaCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Cauta chitanta</Card.Header>
      <Link to="/chitante/edit">
        <Icon name="search" size="massive"/>
      </Link>
    </Card.Content>
  </Card>
);

export default EditChitantaCtA;