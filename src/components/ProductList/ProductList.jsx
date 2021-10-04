import { useState } from 'react';
import Product from './Product';
import styles from './ProductList.module.css';

const func = value => 3
let a = 23;
a++;

const ProductList = (props) => {

/* Local variables */
 const { productListData } = props;

 let elements = productListData.map((product) => 
 <Product name={product.name} desc={product.desc} price={product.price} />
);


  return (
    <div className={styles.productListContainer}>
        {console.log(<Product name='sharad' />)}
        {elements}
    </div>
  );
};

export default ProductList;
