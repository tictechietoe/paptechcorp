import React from 'react';
import _ from 'lodash';
import productsData from '../data/productsData';

const Products = () => {

  return (
    <div className="flex flex-col p-6 md:p-12 lg:p-16 bg-custom-nav-color shadow-elevation-xl items-center">
      <div className="flex responsive-title font-bold mb-10 text-center">
        WIDE RANGE OF PAPER & PAPERBOARD PRODUCTS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 responsive-gap">
        {
          _.map(productsData, product => {
            return (
              <div
                key={ product.id }
                id={ product.id }
                className="flex flex-col items-center cursor-pointer hover:border-4 p-2 md:p-5 lg:p-5 bg-custom-primary shadow-elevation-xl rounded-2xl justify-between"
              >
                <img
                  alt={ `product ${product.id}` }
                  className="border-4 rounded-md bg-white"
                  width="175px"
                  height="175px"
                  src={ product.image }
                />
                <div className="flex flex-col justify-start text-xs md:text-sm lg:text-base">
                  <div className="m-2 text-center flex justify-center items-start font-medium text-white">{ product.name }</div>
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