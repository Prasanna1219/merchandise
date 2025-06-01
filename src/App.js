import Order from './component/order';
import './style.css';
import { useState} from 'react';

function App() {
  const [orders,setOrder] = useState([]);
  const [showpopup, setpopup] = useState(false);
  const [orderData,setdata] = useState({name: '',company: '',email: ''})
  
  const handleInput=(e)=>{
    setdata({...orderData, [e.target.name]: e.target.value});
  }

  const addOrder=()=>{
    if (orderData.name && orderData.company && orderData.email){
      setOrder([...orders, orderData]);
      setdata({name: '',company: '',email: ''});
      setpopup(false);
    }
  }

  return (
    <div className="App">
      <button onClick={()=>setpopup(true)}>Plus</button>
      {showpopup &&(
        <div>
          <h1>order dashboard</h1>
          <input type='text' name='name' placeholder='order name' onChange={handleInput} value={orderData.name}/>
          <input type="text" name='company' placeholder='company name' onChange={handleInput} value={orderData.company}/>
          <input type="email" name='email' placeholder='email' onChange={handleInput} value={orderData.email}/>
          <button onClick={addOrder}>Submit</button>
          <button onClick={()=>setpopup(false)}>Cancel</button>
        </div>
      )}

      {orders.map((order,index)=>(
        <Order key={index} {...order}/>
      ))}
    </div>
  );
}

export default App;
