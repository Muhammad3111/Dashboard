import React from 'react';
import { AiFillTag, AiFillExperiment, AiFillDollarCircle, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import './statistic.scss';

export default function Statistic() {
    return (
        <section className='statistic'>
            <div className="analytic color1">
                <div className="design">
                    <div className="logo">
                        <AiFillTag />
                    </div>
                    <div className="content">
                        <h5>$123,456,789</h5>
                    </div>
                </div>
                <div className="total">
                    <h6>TOTAL SALES</h6>
                    <span className="t1">+18%</span>
                    <AiOutlineArrowUp className="svg1" />
                </div>
            </div>
            <div className="analytic color2">
                <div className="design">
                    <div className="logo">
                        <AiFillExperiment />
                    </div>
                    <div className="content">
                        <h5>$123,456,345</h5>
                    </div>
                </div>
                <div className="total">
                    <h6>TOTAL EXPENSES</h6>
                    <span className="t2">-9%</span>
                    <AiOutlineArrowDown className="svg2" />
                </div>
            </div>
            <div className="analytic color3">
                <div className="design">
                    <div className="logo">
                        <AiFillDollarCircle />
                    </div>
                    <div className="content">
                        <h5>$123,456,876</h5>
                    </div>
                </div>
                <div className="total">
                    <h6>TOTAL REVENUE</h6>
                    <span className="t1">+24%</span>
                    <AiOutlineArrowUp className="svg1" />
                </div>
            </div>
        </section>
    );
}
