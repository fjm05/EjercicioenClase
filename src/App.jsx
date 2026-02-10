import './App.css';
import { Card } from './components/CardCSS/Card';


const App = () => {
  return (
    <div className='cards'>
      <Card nombre='Auriculares inalámbricos' precio='$ 30' descripcion='Sonido claro y cómodos para uso prolongado. Batería de hasta 20 horas.' />
      <Card nombre='Teclado mecánico' precio='$ 80' descripcion='Switches Cherry MX, retroiluminación RGB y reposamuñecas magnético.' />
      <Card nombre='Galaxy S25 Ultra 5G' precio='$ 800' descripcion='Recibe la próxima era de la IA móvil con un compañero de IA que está un paso adelante de todas tus necesidades. Solo deja que la conversación natural guíe el camino para verificar las tareas diarias con facilidad.' />
    </div>
  );
};

export default App;
