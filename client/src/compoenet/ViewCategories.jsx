import React, { useEffect, useState } from 'react';
import './ViewCategories.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function ViewCategories() {
    const [catgeory, setCategory] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                let res = await axios.get('http://localhost:8000/api/category');
                setCategory(res.data.result);
            }
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }, [])

    const handleDelete = async (id) => {
        if(!id){
          return;
        }
       try{
          let res = await axios.delete(`http://localhost:8000/api/category/${id}`);
          toast.success(res.data.message);
       }
       catch(err){
        console.log(err)
       }
    }

    return (
        <div className="cate-container">
            <h1 className="title">Our category</h1>
            <div className="cate-grid">
                {catgeory.length > 0 ? (
                    catgeory.map((cate) => (
                        <div className="cate-card" key={cate._id}>
                            <h2 className="cate-name">{cate.name}</h2>
                            <div className='cate-btns'>
                                <NavLink to={`/category/${cate._id}`}><button>edit</button></NavLink>
                                <button onClick={() => handleDelete(cate._id)}>delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cate available.</p>
                )}
            </div>
            <div className='create'>
                <NavLink to={'/category'}>create</NavLink>
            </div>
        </div>
    );
}

export default ViewCategories
