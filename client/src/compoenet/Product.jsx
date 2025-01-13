import React, { useEffect, useState } from 'react';
import './Product.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Product() {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [categeory, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/product?page=${page}`);
        setProducts(res.data.result);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page]);


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/category`);
        setCategory(res.data.result)
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/product/${id}`);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  }


  const handlePage = (type) => {
    if (type === 'increament') {
      setpage(page + 1)
    } else {
      if (page === 1) {
        return;
      }
      setpage(page - 1);
    }
  }

  const handleCategory = async (e) => {
    let id = e.target.value;
    if (!id) {
      return;
    }
    try {
      let res = await axios.get(`http://localhost:8000/api/product/cateSpecific/${id}`);
      setProducts(res.data.result);
    }
    catch (err) {
      console.log(err.message);
    }
  }


  return (
    <div className="product-container">
      <h1 className="title">Our Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-description">
                {product.description || 'No description available.'}
              </p>
              <p className="product-price">&#8377;{product.price}</p>
              <div className='btns'>
                <NavLink to={`edit/${product._id}`}><button>edit</button></NavLink>
                <button onClick={() => handleDelete(product._id)}>delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className='create'>
        <NavLink to={'/create'}>create</NavLink>
        <select
          onChange={handleCategory}
        >
          <option value="">Select Category</option>

          {
            categeory?.map((cate) => (
              <option value={cate._id} key={cate._id}>{cate.name}</option>
            ))
          }
        </select>
      </div>
      <div className='pagination'>
        <ArrowBackIosNewIcon style={{ fontSize: '25px', cursor: "pointer" }} onClick={() => handlePage('decreament')} />
        <span className='page'>{page}</span>
        <ArrowForwardIosIcon style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => handlePage('increament')} />
      </div>
    </div>
  );
}

export default Product
