import Order from './component/order';
import './style.css';

function App() {

  return (
    <div className="App">
      <Order name="navy"/>
      <Order name="blue"/>
      <Order name="grey"/>
      <Order name="black"/>
    </div>
  );
}

export default App;
