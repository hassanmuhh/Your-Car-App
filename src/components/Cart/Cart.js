import classes from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const carsList = useSelector(state => state.cart.items)

  const DeleteCartHandler = () => {
    dispatch(cartActions.removeAll())
    console.log('tmam');
  }

  return (
    <section className={classes.cartWrapper}>

      {carsList.map(car => {
        return <div key={car.id} className={classes.carInCart}>
          <div className={classes.cartContent}>
            <p className={classes.carTitle}>{car.name}</p>
            <p className={classes.carType}>{car.carClass}</p>
            <div className={classes.carControls}>
              <button onClick={() => {
                dispatch(cartActions.removeItemFromCart(car.id))
              }} className={classes.removeBtn}>-</button>
              <p>{car.quantity}</p>
              <button onClick={() => {
                dispatch(cartActions.addItemToCart({
                  id: car.id,
                  name: car.name,
                }))
              }} className={classes.addBtn}>+</button>
              <div>Del</div>
            </div>
          </div>

          <img src={car.image} alt='' />
        </div>
      })}

      <button className={classes.delete} onClick={DeleteCartHandler}>Delete All</button>
    </section>
  )
}

export default Cart