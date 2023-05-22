import React from 'react'
import classes from './SwiperItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
import { FaLuggageCart, FaUserFriends } from 'react-icons/fa'

const SwiperItem = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.totalQuantity);

  const { id, name, carClass, image } = props;

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      carClass,
      image
    }))
    console.log(items);
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <div className={classes.swiperItem}>
      <div className={classes.imgWrapper}>
        <img src={props.image} alt='' />
      </div>

      <h3>{props.class}</h3>
      <span className={classes.subTitle}>{props.name}</span>

      <p>{props.desc}</p>
      <div className={classes.swiperItemBottom}>
        <div className={classes.carInfo}>
          <ul>
            <li>
              <FaUserFriends className={classes.infoIcon} />
              {props.seats} Seats
            </li>
            <li>
              <FaLuggageCart className={classes.infoIcon} />
              {props.luggage} Luggage
            </li>
          </ul>
        </div>
        <div className={classes.carsControl}>
          <button onClick={removeItemHandler} className={classes.btn}>-</button>
          <span className={classes.carsNumber}>7</span>
          <button onClick={addItemHandler} className={classes.btn}>+</button>
        </div>
      </div>

    </div>
  )
}

export default SwiperItem