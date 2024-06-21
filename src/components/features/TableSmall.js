import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TableSmall = ({table}) => {

    console.log('table', table);

    return (
        <Container>
      <Row className="d-flex flex-row">
        <Col>
          <h4>
            Table {table.id}
          </h4>
        </Col>
        <Col>
          <h5 className="text-start">
            Status: {table.status.toLowerCase()}
          </h5>
        </Col>
        <Col className="ms-auto">
          <Button
            variant="primary"
            as={NavLink}
            to={'/table/'+table.id}>
            Show more
          </Button>
        </Col>
      </Row>
    </Container>

    );   
}

export default TableSmall;