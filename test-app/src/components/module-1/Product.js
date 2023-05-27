import PropTypes from 'prop-types';
import css from './Product.module.css';

const Product = (props) => {
  const {productImg, productName, productPrice} = props;

  return (
    <div className={css.cardWrap}>
      <img src={productImg} alt={productName} width="" />
      <h2>{productName}</h2>
      <p>Price: {productPrice}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};
  
Product.propTypes = {
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default Product;