import { Route, Router, Routes } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Row, Col, Space } from 'antd';
import './App.css';
import Document_Upload from './components/upload_document';
import Navigation from './components/navigation';
import Inventory from './components/inventory';
import Sales from './components/sales';
import Dashboard from './components/dashboard';
import TableData from './components/table_data';
import OrderDelivery from './components/order_delivery'
import Employee from './components/employee';
import Test from './components/test';
import Test2 from './components/formdata';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
          <Route path='/home' element= {< Dashboard />} ></Route>
          <Route path='/inventory' element= {< Inventory />} ></Route>
          <Route path='/sales' element= {< Sales />} ></Route>
          <Route path='/order_delivery' element= {< OrderDelivery />} ></Route>
          <Route path='/employee' element= {< Employee />} ></Route>
          
        </Routes> 
        <Navigation />
       
        
      <Row style={{marginTop: '3%'}}>
       
     
        
      
      </Row>
      
      
    </div>
  );
}

export default App;
