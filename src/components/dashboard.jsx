import React, { Component } from 'react';
import dashboard_image from './images/img.png'

import 'antd/dist/antd.css';
import { Card, Row, Col, Divider } from 'antd';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Navigation from './navigation';

const labels = ["January", "February", "March", "April", "May", "June"];


class Dashboard extends Component {
    state = { 
        
     } 

      data = {
        labels: labels,
        datasets: [
          {
            label: "Expenditure",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      };

    render() { 
        return (
            <div style={{ backgroundColor: '#ededed'}}>
                <Navigation />
                <div>
                    <Row style={{marginTop:30}}>
                        <Col offset={1} span = {22}>
                        <Card 
                            size="small"
                            style={{
                                height: 150,
                            }}>
                                <Row>
                                    <Col span={10} offset={2} style={{marginTop:10}}>
                                    <h1 className="font-weight-bold" style={{color: '#44aec3'}}>HAPPY BAKING!</h1>
                                    <h3 style={{color: '#44aec3'}} >The taste of home-baked goodness.</h3> 
                                    </Col>
                                    
                                    <Col offset={6} >
                                    <img src={dashboard_image} style={{ width: '46%', marginTop: "-37%", marginLeft:'200%'}} />
                                    </Col>
                                </Row>
                        </Card>
                        </Col>
                    </Row>

                    

                    <Divider orientation="left"> <h4> Monthly Summary </h4> </Divider>
                    
                    <Row justify="space-between" >
                        <Col offset={1} span={4}>
                        <Card  size="small"
                            style={{
                                width: 200,
                                height: 100,
                                marginLeft: 0,
                                backgroundColor: '#44aec3',
                               
                            }}>
                            <h4 style={{ color: 'white'}}>Inventory</h4>
                            <h2 style={{ color: 'white'}}>40</h2>
                        </Card>
                        </Col>
                        <Col span={4}>
                        <Card size="small"
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: '#87b7ff'
                            }}>
                            <h4 style={{ color: 'white'}}>Sales</h4>
                            <h2 style={{ color: 'white'}}>75</h2>
                        </Card>
                        </Col>
                        <Col span={4}> 
                        <Card size="small"
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: '#b9e7e6'
                            }}>
                            <h4 style={{ color: 'white'}}>Employee</h4>
                            <h2 style={{ color: 'white'}}>15</h2>
                        </Card>

                        </Col>
                        <Col span={4}>
                        <Card  size="small"
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: '#ffc13a'
                            }}>
                            <h4 style={{ color: 'white'}}>Order Delivery</h4>
                            <h2 style={{ color: 'white'}}>64</h2>
                        </Card>
                        </Col>
                    
                

                    </Row>

                    <Divider orientation="left"> </Divider>
                    <Row>
                    <Col offset={4} >
                    <Card size="small"
                            style={{
                                width: 400,
                                height: 260
                            }}>
                                <h3>Monthly Expenditure</h3>
                            <Line data={this.data}/>    
                        </Card>   
                    </Col>

                    <Col >
                    <Card size="small"
                            style={{
                                width: 400,
                                height: 260,
                               marginLeft:'50%'
                            }}>
                                <h3>Monthly Income</h3>
                            <Line data={this.data}/>    
                        </Card>   
                    </Col>
                    
                    </Row>
                
                
                </div>
                    
            </div>
        );
    }
}
 
export default Dashboard;