import React, { Component } from 'react';
import Document_Upload from './upload_document';
import Navigation from './navigation';
import TableData from './table_data';

class Inventory extends Component {
    state = {  } 

    fetchURL = 'http://localhost:8081/items/files/itemFilesList'
    
    deleteURL = 'http://localhost:8081/items/files/itemFile/'
    
    render() { 
        return (
            <div>
                <Navigation />
                <Document_Upload title = {'Inventory'} />
                <TableData 
                    fetchURL = {this.fetchURL}
                    deleteURl = {this.deleteURL}
                />
            </div>
        );
    }
}
 
export default Inventory;