import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllStatuses } from '../../redux/statusesRedux';
import { getTableById } from '../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Table.module.scss';
import { API_URL } from '../../config';

const extractValues = (statuses) => {
    return statuses.map(status => status.name);
};

const Table = () => {
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    const statuses = useSelector(getAllStatuses);
    const navigate = useNavigate();

    const [status, setStatus] = useState(table.status);
    const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
    const [bill, setBill] = useState(table.bill);
    const [selectionStatuses, setSelectionStatuses] = useState(extractValues(statuses));    

    const updateItem = async (updatedItem) => {
        const response = await fetch(`${API_URL}/tables/${updatedItem.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        });

        if (response.ok) {
            const updatedData = await response.json();
            console.log('Item updated successfully:', updatedData);
            navigate('/');
        } else {
            console.error('Failed to update item:', response.statusText);
        }
    };

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

    const modifyTable = () => {
        const updatedTable = {
            ...table,
            status: status,
            peopleAmount: peopleAmount,
            maxPeopleAmount: maxPeopleAmount,
            bill: bill
        };
        updateItem(updatedTable);
    };

    useEffect(() => {
        if (status !== 'Busy') setBill(0);
        if (status === 'Free' || status === 'Cleaning') setPeopleAmount(0); 
    }, [status]);

    useEffect(() => {
        if (maxPeopleAmount < 0) setMaxPeopleAmount(0);
        if (maxPeopleAmount > 10) setMaxPeopleAmount(10);
        if (peopleAmount < 0) setPeopleAmount(0);
        if (peopleAmount > 10) setPeopleAmount(10);
        if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount);
    }, [peopleAmount, maxPeopleAmount]);

    useEffect(() => {
        if (bill < 0) setBill(0);
    }, [bill]);

    return (
        <Container className="py-4">
            <Row
                className="
                d-flex
                flex-column
                align-items-center
                "
            >
                <Col className="mb-3">
                    <h1>
                        Table {table.id}
                    </h1>
                </Col>
                <Col
                    className="
                        mb-3
                        d-flex
                        align-items-center
                    "
                >
                    <h2
                        className="
                            me-3
                            col-2
                        "
                    >
                        Status:
                    </h2>
                    <select
                        className={`${styles.customSelect} rounded`}
                        value={status}
                        onChange={handleSelectChange}
                    >
                        {selectionStatuses.map(status => (
                            <option
                                key={status}
                                value={status}
                            >
                                {status}
                            </option>
                        ))}
                    </select>
                </Col>
                <Col
                    className="
                        mb-3
                        d-flex
                        align-items-center
                    "
                >
                    <h2
                        className="
                            me-3
                            col-2
                        "
                    >
                        People:
                    </h2>
                    <input 
                        type="number" 
                        className={`${styles.customInput} rounded`} 
                        value={peopleAmount} 
                        onChange={handlePeopleAmountChange}
                    /> 
                    &nbsp;/&nbsp;
                    <input 
                        type="number" 
                        className={`${styles.customInput} rounded`} 
                        value={maxPeopleAmount} 
                        onChange={handleMaxPeopleAmountChange} 
                    />
                </Col>
                {status === 'Busy' && (
                    <Col
                        className="
                            mb-3
                            d-flex
                            align-items-center
                        "
                    >
                        <h2
                            className="
                                me-3
                                col-2
                            "
                        >
                            Bill:             $
                        </h2>
                        <input 
                            type="number" 
                            className={`${styles.customInput} rounded`} 
                            value={bill} 
                            onChange={handleBill}
                            style = {{width: '70px'}}
                        />
                    </Col>
                )}
                <Col className="mb-3">
                    <Button
                        variant="primary"
                        onClick={modifyTable}
                    >
                        Update
                    </Button>
                </Col>
            </Row>
        </Container>
    );   
}

export default Table;
