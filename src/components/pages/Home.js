import { getAllTables } from "../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { ListGroup } from 'react-bootstrap';
import TableSmall from '../features/TableSmall';
import Table from '../pages/Table';
import { getAllStatuses } from "../../redux/statusesRedux";



const Home = () => {

const tables = useSelector(getAllTables);
console.log('HOME tables:', tables);

//const statuses = useSelector(getAllStatuses);
//console.log('HOME statuses:', statuses);

  return (
    <div>
      <h1>All tables</h1>

      <ListGroup>
        {tables.map(table => (
            <ListGroup.Item key={table.id}>
                <TableSmall table={table} />
            </ListGroup.Item>
        ))}
      </ListGroup>

      


    </div>
  );
};

export default Home;