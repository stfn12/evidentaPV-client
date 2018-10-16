import React from 'react';
import { Card, Icon, Divider } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const ProcesCtA = () => (
  <div>
    <Divider/>
    <Card.Group align="center">
      <Card centered>
        <Card.Content>
          <Link to="/procese/new">
            Adauga PV
            <Icon name="plus circle" size="massive"/>
          </Link>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Link to="/procese/edit">
            Cauta PV
            <Icon name="search" size="massive"/>
          </Link>
        </Card.Content>
      </Card>
    </Card.Group>
    <Divider/>
  </div>
);

export default ProcesCtA;