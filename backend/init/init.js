import mongoose from "mongoose";
import product from "../model/product.js";

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => {
    console.log('database is connected')
  })
  .catch((err) => {
    console.log(err)
  })

const Fashion = [
  {
    "productName": "Casual T-Shirt",
    "categoryId": "6783ffdbb4a959ac111f12c2",
    "description": "A 100% cotton crew-neck t-shirt available in multiple colors.",
    "price": 500
  },
  {
    "productName": "Slim Fit Jeans",
    "categoryId": "6783ffdbb4a959ac111f12c2",
    "description": "Stylish slim-fit denim jeans with stretch for comfort.",
    "price": 400
  },
  {
    "productName": "Leather Jacket",
    "categoryId": "6783ffdbb4a959ac111f12c2",
    "description": "A premium leather jacket with a modern design and zippered pockets.",
    "price": 1200
  },
  {
    "productName": "Running Shoes",
    "categoryId": "6783ffdbb4a959ac111f12c2",
    "description": "Lightweight and durable running shoes with superior grip.",
    "price": 600
  },
  {
    "productName": "Designer Handbag",
    "categoryId": "6783ffdbb4a959ac111f12c2",
    "description": "A stylish leather handbag with spacious compartments and a sleek design.",
    "price": 850
  }
]


const Grocery = [
  {
    "productName": "Organic Rice",
    "categoryId": "6784e69f8a165fb258db324d",
    "description": "5kg pack of premium-quality organic basmati rice.",
    "price": 200
  },
  {
    "productName": "Olive Oil",
    "categoryId": "6784e69f8a165fb258db324d",
    "description": "1L bottle of extra virgin olive oil, perfect for cooking and salads.",
    "price": 150
  },
  {
    "productName": "Green Tea",
    "categoryId": "6784e69f8a165fb258db324d",
    "description": "50 tea bags of natural green tea for a refreshing experience.",
    "price": 100
  },
  {
    "productName": "Whole Wheat Bread",
    "categoryId": "6784e69f8a165fb258db324d",
    "description": "A loaf of freshly baked whole wheat bread, rich in fiber.",
    "price": 30
  },
  {
    "productName": "Almonds",
    "categoryId": "6784e69f8a165fb258db324d",
    "description": "500g pack of premium-quality raw almonds for healthy snacking.",
    "price": 250
  }
]



const Toys = [
  {
    "productName": "Building Blocks Set",
    "categoryId": "6784e551fcb6138b31737739",
    "description": "A colorful set of 100 building blocks for creative play.",
    "price": 290
  },
  {
    "productName": "Remote Control Car",
    "categoryId": "6784e551fcb6138b31737739",
    "description": "A high-speed remote control car with durable design and long battery life.",
    "price": 490
  },
  {
    "productName": "Stuffed Teddy Bear",
    "categoryId": "6784e551fcb6138b31737739",
    "description": "A soft and cuddly teddy bear, 24 inches tall.",
    "price": 190
  },
  {
    "productName": "Puzzle Game",
    "categoryId": "6784e551fcb6138b31737739",
    "description": "A 500-piece jigsaw puzzle with a scenic design for kids and adults.",
    "price": 150
  },
  {
    "productName": "Action Figure Set",
    "categoryId": "6784e551fcb6138b31737739",
    "description": "A set of 5 superhero action figures with movable joints.",
    "price": 390
  }
]



const Furniture = [
  {
    "productName": "Dining Table",
    "categoryId": "6784e55cfcb6138b3173773b",
    "description": "A wooden dining table that seats six people.",
    "price": 499
  },
  {
    "productName": "Office Chair",
    "categoryId": "6784e55cfcb6138b3173773b",
    "description": "An ergonomic office chair with adjustable height and lumbar support.",
    "price": 149
  },
  {
    "productName": "Sofa Set",
    "categoryId": "6784e55cfcb6138b3173773b",
    "description": "A 3-seater comfortable sofa set with plush cushions.",
    "price": 999
  },
  {
    "productName": "Bed Frame",
    "categoryId": "6784e55cfcb6138b3173773b",
    "description": "A queen-size bed frame made of solid wood with a modern design.",
    "price": 799
  },
  {
    "productName": "Bookshelf",
    "categoryId": "6784e55cfcb6138b3173773b",
    "description": "A 5-shelf wooden bookshelf for organizing books and decor.",
    "price": 199
  }
]



const electronics = [
  {
    "productName": "Smartphone",
    "categoryId": "6784e541fcb6138b31737737",
    "description": "A high-performance smartphone with 128GB storage and 5G connectivity.",
    "price": 6990
  },
  {
    "productName": "Laptop",
    "categoryId": "6784e541fcb6138b31737737",
    "description": "A powerful laptop with 16GB RAM and 1TB SSD for professionals.",
    "price": 9990
  },
  {
    "productName": "Bluetooth Headphones",
    "categoryId": "6784e541fcb6138b31737737",
    "description": "Noise-canceling over-ear headphones with a 30-hour battery life.",
    "price": 149
  },
  {
    "productName": "Smartwatch",
    "categoryId": "6784e541fcb6138b31737737",
    "description": "A smartwatch with fitness tracking and call capabilities.",
    "price": 1990
  },
  {
    "productName": "Tablet",
    "categoryId": "6784e541fcb6138b31737737",
    "description": "A 10-inch tablet with 64GB storage and a long-lasting battery.",
    "price": 29900
  }
]



const addP = async () => {
  try {
    let res = await product.insertMany(Grocery);
    console.log(res);
  }
  catch (err) {
    console.log(err);
  }
}
addP()