import React from 'react';
import apple from '../../assets/apple.png';
import './orders.scss';


export default function Orders() {
    return (
        <section className='order'>
            <div className="orders">
                <div className="orders__details">
                    <div>
                        <h4>Recent Order</h4>
                    </div>
                    <div>
                        <button> SEE ALL</button>

                    </div>
                </div>
                <div className="orders__table">
                    <table>
                        <tr>
                            <th>Tracking ID</th>
                            <th>Product Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>#9876543</td>
                            <td className="img"> <img src={apple} alt="" /><span>Apple Watch</span></td>
                            <td>Jul 29, 2021</td>
                            <td>$329</td>
                            <td ><button>Complete</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    );
}
