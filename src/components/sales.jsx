import React, { Component } from 'react';
import TableData from './table_data';
import Document_Upload from './upload_document';
import Navigation from './navigation';

class Sales extends Component {

    fetchURL = 'http://localhost:8081/sales/files/filesList'
    
    deleteURL = 'http://localhost:8081/sales/files/file/'
    
    render() { 
        return (
            <div>
                <Navigation />
                <Document_Upload title = {'Sales'} />
                <TableData 
                    fetchURL = {this.fetchURL}
                    deleteURl = {this.deleteURL}
                />
            </div>
        );
    }
}
 
export default Sales;