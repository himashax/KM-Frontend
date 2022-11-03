import React, { Component } from 'react';
import TableData from './table_data';
import Navigation from './navigation';
import Document_Upload from './upload_document'

class OrderDelivery extends Component {
    state = { 
        orderDeliveryFiles: []
     } 

    fetchURL = 'http://localhost:8081/orderDelivery/files/orderDeliveryFilesList'
    
    deleteURL = 'http://localhost:8081/orderDelivery/files/orderDeliveryFile/'

    render() { 
        return (
            <div>
                <Navigation />
                <Document_Upload title = {'Order Delivery'} />
                <TableData 
                    fetchURL = {this.fetchURL}
                    deleteURl = {this.deleteURL}
                />
            </div>
        );
    }
}
 
export default OrderDelivery;