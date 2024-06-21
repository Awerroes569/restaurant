import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllStatuses } from '../../redux/statusesRedux';
import { getTableById } from '../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import styles from './Table.module.scss';


const extractValues = (statuses, status) => {
    let names = statuses.map(status => status.name);
    return names;
  };

const Table = () => {

    
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    const statuses = useSelector(getAllStatuses);

    

    const [status, setStatus] = useState(table.status);
    const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
    const [bill, setBill] = useState(table.bill);
    const [selectionStatuses, setSelectionStatuses] = useState(extractValues(statuses, status));    

    const handleSelectChange = (event) => {
        event.preventDefault();
        setStatus(event.target.value);
      };

    const handlePeopleAmountChange = (event) => {
        event.preventDefault();
        setPeopleAmount(event.target.value);
    };

    const handleMaxPeopleAmountChange = (event) => {
        event.preventDefault();
        setMaxPeopleAmount(event.target.value);
    };

    const handleBill = (event) => {
        event.preventDefault();
        setBill(event.target.value);
    };

    return (
        <Container>
            <Row
                className="
                d-flex
                flex-column
                "
            >
                <Col>
                    <h1>
                        Table {table.id}
                    </h1>
                </Col>
                <Col
                    className="
                        d-flex
                        flex-row
                    "
                >
                    <h2 className="text-start">
                        Status:
                    </h2>
                    
                    <select
                        className="mx-4"
                        value={status}
                        onChange={handleSelectChange}
                    >
                        {
                            selectionStatuses.map(status => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))
                        }
                    </select>
                </Col>
                <Col
                    className="
                        d-flex
                        flex-row
                    "
                >
                    <h2 className="text-start">
                        People:
                    </h2>
                    <input 
                        type="number" 
                        className="border border-secondary border-3 p-2 rounded custom-input" 
                        value={peopleAmount} 
                        onChange={handlePeopleAmountChange}
                        style={{width: '50px'}}
                    /> 
                    &nbsp;/&nbsp;
                    <input 
                        type="number" 
                        className="border border-secondary border-3 p-2 rounded" 
                        value={maxPeopleAmount} 
                        onChange={handleMaxPeopleAmountChange} 
                        style={{width: '50px'}}
                    />
                </Col>
                <Col
                    className="
                        d-flex
                        flex-row
                    "
                >
                    <h2>
                        Bill: $ 
                    </h2>
                    <input 
                        type="number" 
                        className="border border-secondary border-3 p-2 rounded" 
                        value={bill} 
                        onChange={handleBill} 
                        style={{width: '70px'}}
                    />
                </Col>
                <Col className="ms-auto">
                    <Button variant="primary">
                        Update
                    </Button>
                </Col>
            </Row>
        </Container>

    );   
}

export default Table;