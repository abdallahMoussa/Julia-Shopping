import React, { useEffect, useState } from "react";
import classes from "./ProductItem.module.css";
import QuickView from "./QuickView";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/Cart";
import { wishListActions } from "../../store/Whish-List";

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function ProductItem(props) {
  const { image, title, price, id, rate } = props;
  const [existingItem, setExistingItem] = useState();
  const [existingInWishList, setExistingInWishList] = useState();
  const [showQuickView, setShowQuickView] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const wishListItems = useSelector((store) => store.wishList.items);

  useEffect(() => {
    let existingInCart = cartItems.find((item) => item.id === id);
    setExistingItem(existingInCart);

    let inWhishList = wishListItems.find((item) => item.id === id);
    setExistingInWishList(inWhishList);
  }, [existingItem, cartItems, id, existingInWishList, wishListItems]);

  function addToWishList() {
    if (existingInWishList) {
      dispatch(wishListActions.delete({ id }));
    } else
      dispatch(
        wishListActions.add({
          id,
          title,
          price,
          image,
        })
      );
  }

  function addToCartHandler() {
    if (existingItem) {
      dispatch(cartActions.delete({ id }));
    } else {
      dispatch(
        cartActions.add({
          id,
          title,
          price,
          image,
        })
      );
    }
  }

  function showQuickViewHandler() {
    // show quick view component, model
    setShowQuickView((prev) => !prev);
  }

  return (
    <div
      className={`${classes["item"]} ${
        props.height ? `${classes.item} ${classes.homePage}` : ""
      } bg-white overflow-hidden rounded-md`}
    >
      {showQuickView && <QuickView id={id} onClose={showQuickViewHandler} />}

      <span className={classes["right-items"]}>
        <HiOutlineHeart
          onClick={addToWishList}
          className={existingInWishList ? classes.active : undefined}
        />
        <MdOutlineRemoveRedEye onClick={showQuickViewHandler} />
      </span>
      {props?.discount && (
        <span className={classes.discount}>{props.discount}% off</span>
      )}

      <div className={classes.image}>
        <Link to={`/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={classes["info-text"]}>
        <Link to={`/${id}`}>
          <h3 className={classes.title}>{title}</h3>
        </Link>
        <div className={classes.rate}>
          {Array.from({ length: parseInt(rate) }).map((_, index) => (
            <AiFillStar key={index} className={classes.star} />
          ))}
          {Array.from({ length: 5 - parseInt(rate) }).map((_, index) => (
            <AiFillStar
              key={index}
              className={`${classes.star} ${classes.blur}`}
            />
          ))}
          <span>({parseInt(rate)})</span>
        </div>
        <div className={classes.price}>
          <h4>{price} $</h4>

          <button
            onClick={addToCartHandler}
            className={`${
              existingItem
                ? `${classes.active} ${classes.button}`
                : classes.button
            }`}
          >
            {existingItem && <AiOutlineCheck />}
            {!existingItem && <GoPlus />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
