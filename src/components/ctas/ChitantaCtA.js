import React from 'react';
import { Card, Icon, Divider } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const ChitantaCtA = () => (
  <div>
    <Divider/>
    <Card.Group align="center">
      <Card centered>
        <Card.Content>
          <Link to="/chitante/new">
            Adauga chitanta
            <Icon name="plus circle" size="massive"/>
          </Link>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Link to="/chitante/edit">
            Cauta chitanta
            <Icon name="search" size="massive"/>
          </Link>
        </Card.Content>
      </Card>
    </Card.Group>
    <Divider/>
  </div>
);

export default ChitantaCtA;