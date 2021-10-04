import { useState } from 'react';
import styles from './Product.module.css';

const Product = (props) => {
  const { name, desc, price } = props;

  /* State variables */
  const [counter, setCounter] = useState(0);

  /*  Functions */
  const substractCount = () => {
    setCounter(counter - 1); // can be an issue
  };

  const addCount = () => {
    setCounter(counter + 1); // can be an issue
  };

  return (
    <div className={styles.product}>
      <span className={styles.productName}>{name}</span>
      <span className={styles.productdesc}>{desc}</span>
      <span>{price}</span>
      <div className={styles.stepper}>
        <button disabled={counter === 0} onClick={substractCount}>
          -
        </button>
        <span>{counter}</span>
        <button onClick={addCount}>+</button>
      </div>
    </div>
  );
};

export default Product;
