import Navbar from '../components/Navbar';
import './styles/ticket.css'
import ListarFunciones from '../components/ListarFunciones';

const Funciones = () => (
    <>
    <Navbar />
    <div className='container' id='main'> 
        <ListarFunciones />
      </div>
    </>
  );

export default Funciones;