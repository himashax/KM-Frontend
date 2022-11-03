import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Upload, Input, Button, Row, Col } from 'antd';
import axios from "axios"

class Document_Upload extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      file: null,
      category: '',
      description: '',
      author: ''
  } 
  }

  formData = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }
  
  handleFile = (e) => {
    let file = e.target.files[0]
    this.setState({file})
    console.log(this.state.file)
  }

  handleSubmitFile = (e) => {
    e.preventDefault()
    
        let formData = new FormData();
        formData.append('file', this.state.file)
        formData.append('category', this.state.category)
        formData.append('description', this.state.description)
        formData.append('author', this.state.author)

        console.log('file', this.state)

        axios({
          method: "POST",
          url: 'http://localhost:8081/employee/files/uploadEmployeeFiles',
          data: formData,
          headers: { "Content-Type": "multipart/form-data",
          },
        }).then(res => {
          console.log(`Success` + res.data);
      })
      .catch(err => {
          console.log(err);
      })
    
}

   layout = {
    labelCol: { span:8 },
    wrapperCol: { span: 8 },
  };
   tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
  };

  data = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
    },
  };

  render() {
    return (
      <div>
        {/* <Row>
        <Col span={8} offset={10}>
        <h4 >Upload {this.props.title} Document</h4>
        </Col>
        </Row> */}

        {/* <form onSubmit={this.handleSubmitFile}>
          <input type={'file'} onChange={this.handleFile} />
          <button type='submit'>Upload</button>
        </form> */}
        
        <Form {...this.layout}>
        <Form.Item label="Category" >
        <Input name= 'category' onChange={this.formData} />
        </Form.Item>
  
        <Form.Item
        label="Description">
        <Input name= 'description' onChange={this.formData} />
        </Form.Item>

        <Form.Item
        label="Author">
        <Input name= 'author' onChange={this.formData} />
        </Form.Item>
        
        <Form.Item
        name="upload"
        label="Upload File">
        <Input name= 'file' type='file' onChange={this.handleFile} />
      </Form.Item>
      <Row>
        <Col offset={8} span={16} >
        <Button type='primary' htmlType='submit' onClick={this.handleSubmitFile}>submit </Button>
        </Col>
        </Row>
      
      </Form>
        
        
      </div>
      

   )
  }
  
}
 
export default Document_Upload;