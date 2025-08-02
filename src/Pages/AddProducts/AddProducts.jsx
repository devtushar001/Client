import React from "react";
import './AddProducts.css';
export const AddProducts = () => {
    return (
        <>
            <div className="add-products">
                <div className="container">
                    <h2>List your product to MES</h2>
                    <div className="input-data">
                        <div className="input">
                            <label htmlFor="product-name">Enter Product Name : </label>
                            <input type="text" name="product-name" id="product-name" placeholder="Enter product name" />
                        </div>
                        <div className="input">
                            <label htmlFor="product-image">Select Product Image : </label>
                            <input type="file" name="product-image" id="product-image" placeholder="Select product image" />
                        </div>
                        <div className="input">
                            <label htmlFor="stock">Enter Stock Value</label>
                            <input type="number" name="stock" id="stock" placeholder="Enter stock value" />

                        </div>
                        <div className="input">

                            <label htmlFor="product-id">Create Unique Product ID</label>
                            <input type="text" id="product-id" name="product-id" placeholder="Enter product id" />
                        </div>
                        <div className="input">
                            <label htmlFor="tags">Enter Tags</label>
                            <input type="text" name="tags" id="tags" placeholder="Enter tags saperated with comma (,)" />
                        </div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}