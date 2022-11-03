import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Popconfirm , Button} from 'antd';

class TableData extends Component {
    state = { 
      files: []
     } 

    componentDidMount(){
      this.fetchDocuments()
    }

    fetchDocuments(){
      fetch(this.props.fetchURL)
      .then(response => response.json())
      .then(data => 
        this.setState({
          files:data
      }) 
    )}


    deleteDocuement = (id) => {
      console.log(id)
      var url= this.props.deleteURl + id + "/"
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
 
    render() { 
        return (
            <div className='row' style={{ marginTop: 50, marginLeft: 50 }}>

                <h3> Documents </h3>

                <table className= "table table-hover table-borderless"  style={{ marginLeft: 5, width:"95%" }}>
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Author</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.files.map((file => {
                      const{id, category, fileName, date, description, salesPerson} = file
                      return (
                      <tr key={id}>
                          <td> {fileName} </td>
                          <td> {category} </td>
                          <td> {date} </td>
                          <td> {description} </td>
                          <td> {salesPerson} </td>
                          <td>
                                <Button type="primary" > Update </Button>
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
        );
    }
}
 
export default TableData;