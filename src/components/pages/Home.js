import { getAllTables } from "../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { ListGroup } from 'react-bootstrap';
import TableSmall from '../features/TableSmall';

const Home = () => {

const tables = useSelector(getAllTables);

  return (
    <div>
      <h1>
        All tables
      </h1>

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