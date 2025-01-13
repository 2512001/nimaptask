import React, { useRef, useState } from "react";
import "./cate.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, NavLink, useParams } from "react-router-dom";
import './EditCate.css';
function EditCate() {
    const [categoryName, setCategoryName] = useState("");
    let {id} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryName) {
            return alert('please enter category name');
        }
        try {
            let res = await axios.patch(`http://localhost:8000/api/category/${id}`, { name: categoryName });
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
            <h2>Edit Category</h2>
            <form onSubmit={handleSubmit} className="category-form">
                <input
                    type="text"
                    placeholder="Edit name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="category-input"
                />
                <button type="submit" className="submit-button">
                    Edit Category
                </button>
            </form>
             <NavLink style={{padding : '1rem'  }}  to={'/ViewCategories'}>see all category</NavLink>
        </div>
    );
}

export default EditCate;