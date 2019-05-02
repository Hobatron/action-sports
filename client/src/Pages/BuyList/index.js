import React from "react";
// import BuyListCards from '../../components/BuyList';
import './BuyList.css';

const BuyList = () => {
    return (
        <div className="container">
            <div className="row">
            </div>
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="header">
                <h2>BuyList</h2>
                </div>
                    <div id="Browse">
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Browse Buylist</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    {/* <BuyListCards/> */}
                </div>
            </div>
        </div>


    )
}

export default BuyList;