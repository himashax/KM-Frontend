import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Upload, Input, Button, Row, Col, Popconfirm } from 'antd';

class Test2 extends Component {
    state = { 
        editing: this.props.editing
     } 

     

    render() { 
        
        return (
            
            <div>
                      

            
                <Form {...this.props.layout} ref={this.props.formRef}>
                    <Form.Item label="Category" name= 'category'  >
                        <Input name= 'category' onChange={this.props.formData} />
                    </Form.Item>
            
                    <Form.Item label="Description" name= 'description'>
                        <Input name= 'description' onChange={this.props.formData} />
                    </Form.Item>

                    <Form.Item label="Author" name='author' >
                        <Input name= 'author' onChange={this.props.formData} />
                    </Form.Item>
                    
                    <Form.Item name= 'file' label="Upload File">
                        <Input name= 'file' type='file' onChange={this.props.handleFile} />
                    </Form.Item>
                
                    <Row>
                    <Col offset={8} span={16} >
                  
                        {this.state.editing ?  ( <div> </div>) 
                        : <Button type='primary' htmlType='submit' onClick={this.props.handleSubmitFile}> Submit </Button>}
                        
                    </Col>
                    </Row>
                </Form>
     
            </div>
        );
    }
}
 
export default Test2;