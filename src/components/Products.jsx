import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import productsData from '../data/productsData';

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-16 bg-custom-nav-color shadow-elevation-xl items-center">
      <div className="flex text-3xl font-bold mb-10">
        WIDE RANGE OF PAPER & PAPERBOARD PRODUCTS
      </div>
      <div className="grid grid-rows-2 grid-cols-4 gap-8">
        {
          _.map(productsData, product => {
            return (
              <div
                key={ product.id }
                id={ product.id }
                onClick={ () => navigate(`/products#${product.id}`) }
                className="flex flex-col items-center cursor-pointer hover:border-4 p-5 bg-custom-primary shadow-elevation-xl rounded-2xl justify-between"
              >
                <img className="border-4 rounded-md bg-white" width="256px" height="256px" src={ product.image } />
                <div className="flex flex-col">
                  <div className="m-2 text-center font-medium text-white">{ product.name }</div>
                  <div className="m-2 text-center font-medium text-white">{ _.upperCase(product.category) }</div>
                  <div className="m-2 text-center font-medium text-white">GSM : { product.gsm }</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Products;