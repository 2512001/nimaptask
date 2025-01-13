import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './compoenet/Product';
import Edit from './compoenet/Edit';
import Create from './compoenet/Create';
import CreateCategory from './compoenet/Createcategory';
import ViewCategories from './compoenet/ViewCategories';
import Navbar from './compoenet/Navbar';
import EditCate from './compoenet/EditCate';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route exact path="/category" element={<CreateCategory />} />
        <Route path="/ViewCategories" element={<ViewCategories />} />
        <Route exact path="/category/:id" element={<EditCate />} />
      </Routes>
    </Router>
  );
}

export default App;
