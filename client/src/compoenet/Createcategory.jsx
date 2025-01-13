import React, { useState } from "react";
import "./cate.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, NavLink } from "react-router-dom";

function CreateCategory() {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryName) {
            return alert('please enter category name');
        }
        try {

            let res = await axios.post('http://localhost:8000/api/category', { name: categoryName });
            console.log(res);
            toast.success(res.data.message);
        } catch (error) {
            console.log(error.message)
        }
        finally{
            setCategoryName("")
        }
    };

    return (
        <div className="create-category-container">
            <h2>Create New Category</h2>
            <form onSubmit={handleSubmit} className="category-form">
                <input
                    type="text"
                    placeholder="Enter category name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="category-input"
                />
                <button type="submit" className="submit-button">
                    Add Category
                </button>
            </form>
             <NavLink style={{padding : '1rem'  }}  to={'/ViewCategories'}>see all category</NavLink>
        </div>
    );
}

export default CreateCategory;