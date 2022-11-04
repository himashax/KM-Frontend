import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Upload, Input, Button, Row, Col, Popconfirm } from 'antd';
import axios from "axios"
import Test2 from './formdata';
const {Search} = Input;

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      file: null,
      category: '',
      description: '',
      author: '',
      files:[],
      selectedDocument: {},
      editing: false,
      searchedDocuments: [],
      search: false
  } 
      this.onUpdate = this.onUpdate.bind(this)
      
  }

  formRef = React.createRef();

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
          this.fetchDocuments()
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

 

  componentDidMount(){
    this.fetchDocuments()
  }

  fetchDocuments(){
    fetch('http://localhost:8081/employee/files/employeeFilesList')
    .then(response => response.json())
    .then(data => 
      this.setState({
        files:data
    }) 
  )}


  deleteDocuement = (id) => {
    console.log(id)
    var url= 'http://localhost:8081/employee/files/employeeFile/' + id + "/"
    fetch(url, {
        method:'DELETE',
        headers:{
        'Content-type': 'application/json',
        }
    }).then((response) => {
        this.fetchDocuments()
    }).catch(err=>console.log(err));
  }

  confirm(id, e) {
    console.log(e);
    this.deleteDocuement(id)
  }

  onUpdate = (e, document) => {

    const selectedDocument = {...document}

    this.setState({ 
      editing: true,
      file: selectedDocument.fileName,
      category: selectedDocument.category,
      description: selectedDocument.description,
      author: selectedDocument.salesPerson,
      selectedDocument: selectedDocument
    }, () => { this.setValues() } 
    )

    console.log('on update document', this.state.selectedDocument)

    console.log('edit', this.state.editing)  

  }

  setValues() {

    this.formRef.current.setFieldsValue({
      
      category: this.state.category,
      description: this.state.description,
      author: this.state.author,
  
  });
  }

  handleUpdateFile = (e, document) => {
    e.preventDefault()

    const selectedDocument = {...document}
    const {id, fileName, category, description, salesPerson} = selectedDocument
    console.log('updated selected doc', document)
        const updatedDocument = {
            id: id,
            file: this.state.file || fileName,
            category: this.state.category || category,
            description: this.state.description || description ,
            author : this.state.author || salesPerson,
        }

        console.log('updated doc', updatedDocument)

        let updatedFormData = new FormData();
        updatedFormData.append('file', updatedDocument.file)
        updatedFormData.append('category', updatedDocument.category)
        updatedFormData.append('description', updatedDocument.description)
        updatedFormData.append('author', updatedDocument.author)

        axios({
          method: 'PATCH',
          url: 'http://localhost:8081/employee/files/employeeFile/' + id + '/',
          data: updatedFormData,
          headers: { 
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => {
          this.fetchDocuments()
          console.log('before', this.state.editing)
          this.setState({ editing: !this.state.editing }, () => console.log('after', this.state.editing))
        }).catch(err=>console.log(err));
  }

  onSearch = (name) => {
    var url= 'http://localhost:8081/employee/files/file/name/' + name
    axios(url)
        .then((response) => {
        console.log(url)
        this.setState({
          searchedDocuments: response.data,
          search: true
        })
        console.log(this.state.searchedDocuments)
    })
    .catch((err) => {
      console.log(err);
    });

  }

  checkDocuments() {
    return this.state.search  ? this.state.searchedDocuments : this.state.files;        
  }

  render() {
    return (
      <div>

      <Search 
        placeholder="input search text" 
        onSearch={this.onSearch} 
        enterButton
      />

      {this.state.editing ? 
      <Test2 
      layout = {this.layout} 
      formRef = {this.formRef}
      document = {this.state}
      editing = {this.state.editing}
      handleUpdateFile = {this.handleUpdateFile}
      handleFile = {this.handleFile}
      formData = {this.formData}
      selectedDocument = {this.state.selectedDocument}
       />
      :
      <Test2 
      layout = {this.layout} 
      formRef = {this.formRef}
      handleSubmitFile = {this.handleSubmitFile}
      handleFile = {this.handleFile}
      formData = {this.formData} /> 
      } 

      
        
      <table className= "table table-hover table-borderless"  style={{ marginLeft: 5, width:"95%" }}>
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Author</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                       {this.checkDocuments().map((file => {
                      const{id, category, fileName, date, description, salesPerson} = file
                      return (
                      <tr key={id}>
                          <td> {fileName} </td>
                          <td> {category} </td>
                          <td> {date} </td>
                          <td> {description} </td>
                          <td> {salesPerson} </td>
                          <td>
                                <Button type="primary"  htmlType='button' onClick={(e) => this.onUpdate(e, file) }> Update </Button>
                          </td>
                          <td><Popconfirm
                                title="Are you sure delete this document?"
                                onConfirm={() => this.confirm(id)}
                                onCancel={this.cancel}
                                okText="Delete"
                                cancelText="Cancel">
                                <Button type="danger" >Delete</Button> </Popconfirm>
                          </td>
                      </tr>)
                  }))
                  }
                  </tbody>
                </table>

      </div>
      

   )
  }
  
}
 
export default Employee;