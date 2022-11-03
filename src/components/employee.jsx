import React, { Component } from 'react';
import Navigation from './navigation';
import TableData from './table_data';
import Document_Upload from './upload_document';

class Employee extends Component {
    state = { 
    } 

    fetchURL = 'http://localhost:8081/employee/files/employeeFilesList'
    
    deleteURL = 'http://localhost:8081/employee/files/employeeFile/'
    
    render() { 
        return (
            <div>
                <Navigation />
                <Document_Upload title = {'Employee'} />
                <TableData 
                    fetchURL = {this.fetchURL}
                    deleteURl = {this.deleteURL}
                />
            </div>
        );
    }
}
 
export default Employee;