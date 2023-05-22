import classes from './Services.module.css';
import service01 from '../../assets/images/service01.png'
import service02 from '../../assets/images/service02.png'
import service03 from '../../assets/images/service03.png'


const Services = () => {
  return (
    <section className={classes.servicesContainer} id='services'>
      <div className={classes.servicesWrapper}>
        <div className={classes.servicesHead}>
          <h2>Services</h2>
        </div>
        <div className={classes.servicesGrid}>
          <div className={classes.serviceItem}>
            <img src={service01} alt='' />
            <h3>Car Sales</h3>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
          <div className={classes.serviceItem}>
            <img src={service02} alt='' />
            <h3>Car Rental</h3>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
          <div className={classes.serviceItem}>
            <img src={service03} alt='' />
            <h3>Car Selling</h3>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services