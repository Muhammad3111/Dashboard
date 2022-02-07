import React from 'react';
import Navbar from './navbar/Navbar';
import Statistic from './statistic/Statistic';
import Sales from './sales/Sales';
import Orders from './orders/Orders';
import Analiyitc from './analiytic/Analiyitc';
import Shopping from './shopping/Shopping';
import Add from './add/Add';
import './dashboard.scss';


export default function Dashboard() {
    return (
        <section className='dashboard'>
            <Navbar />
            <div className="grid">
                <div className="grid_1">
                    <Statistic />
                    <Sales />
                    <Orders />
                </div>
                <div className="grid_2">
                    <Analiyitc />
                    <Shopping />
                    <Add />
                </div>
            </div>
        </section>
    );
}
