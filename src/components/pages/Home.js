import { getAllTables } from "../../redux/tablesRedux";
import { useSelector } from "react-redux";



const Home = () => {

const tables = useSelector(getAllTables);
console.log('HOME tables:', tables);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      {tables.map(table => (
        <div key={table.id}>
          <h2>{table.status}</h2>
          <p>{table.bill}</p>
        </div>
      ))}


    </div>
  );
};

export default Home;