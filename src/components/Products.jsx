import React, { useEffect, useState } from "react";
import { productUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FaEye } from "react-icons/fa";
import ShimmerProducts from "../utils/ShimmerProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const data = await fetch(productUrl);
    const json = await data.json();
    const details = json.map((obj) => ({ ...obj, quantity: 1 }));

    console.log(details);
    setProducts(details);
  }
  const dispach = useDispatch();
  function HandleAdd(items) {
    dispach(addItem(items));
  }

  return products.length===0?<ShimmerProducts/>:(
    <div className="flex flex-col">
      <div className=" relative top-20 justify-center flex m-5 ">
        <input
          className="p-1 border w-72 border-gray-400 rounded-l-full 
                    text-center outline-gray-400 active:pl-5"
          type="text"
          placeholder="Search"
        />
        <BsSearch
          className="border  border-gray-400 rounded-r-full 
                    text-md h-9 w-9 p-2  cursor-pointer text-gray-400"
        />
      </div>
      <div className="flex ">
        <div className="flex  mt-[100px] justify-center flex-wrap ">
          {products.map((items) => (
            <div
              className="h-[300px] w-[200px]  m-5 flex flex-col 
                      justify-center shadow-md  rounded-md relative  "
              key={items.id}
            >
              <button
                className=" text-xl font-bold pb-8 border cursor-pointer 
                  h-8  w-[34px] absolute top-2 shadow-sm rounded-md left-40 
                  shadow-mg bg-gray-300/50"
                onClick={() => HandleAdd(items)}
              >
                +
              </button>
              <Link to={"/products/" + items.id}>
                <button
                  className="border cursor-pointer h-8 w-[34px]  pl-2 
                          absolute top-11 shadow-md rounded-md  left-40 
                          bg-gray-300/50"
                >
                  <FaEye />
                </button>
              </Link>
              <div
                className="h-[260px] w-[200px] flex justify-center 
              border rounded-md items-center   "
              >
                <Link to={"/products/" + items.id}>
                  <img
                    src={items.image}
                    alt=""
                    className="h-[130px] w-[100px]  hover:h-[160px] hover:w-[130px] 
                  hover:ease-in hover:duration-500 cursor-pointer "
                  />
                </Link>
              </div>

              <p className="text-xs uppercase text-gray-400 font-bold ">
                {items.category}
              </p>
              <p className="font-bold  text-sm text-gray-700 mt-3 ml-1">
                {"$" + items.price}
              </p>
              <p className="text-xs font-bold h-[100px] m-1 text-gray-800 ">
                {items.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;