import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const ControlorCtA = () => (
  <Card.Group align="center">
  <Card centered>
    <Card.Content>
        <Link to="/controlori/new">
          Adauga controlor
          <Icon name="plus circle" size="massive"/>
        </Link>
    </Card.Content>
  </Card>
    <Card centered>
      <Card.Content>
        <Link to="/controlori/edit">
          Cauta controlor
          <Icon name="search" size="massive"/>
        </Link>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default ControlorCtA;
