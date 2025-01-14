import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Create.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [productName, setProductName] = useState('');
    const [categoryName, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categeory, addCategory] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:8000/api/category`);
                addCategory(res.data.result)
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!productName || !categoryName || !price) {
            return alert('please enter this field');
        }
        try {
            const response = await axios.post('http://localhost:8000/api/product', {
                productName,
                categoryName,
                description,
                price,
            });
            toast(response.data.message);
            navigate('/')
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="create-product">
            <h2>Create a New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select
                        value={categoryName}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>

                        {
                            categeory?.map((cate) => (
                                <option value={cate._id} key={cate._id}>{cate.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}

export default Create;
