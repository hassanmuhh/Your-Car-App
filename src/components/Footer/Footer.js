import { FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaMobile, FaTwitter } from 'react-icons/fa'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footerWrapper} id='contact'>
      <div className={classes.footerContent}>
        <ul className={classes.main}>
          <a href='/'><strong>Your</strong>Car</a>
          <li><p>We are known for luxurious and
            premium chaffeur services worldwide. We are simply the best
            you can find.</p></li>
          <li><p> we are dedicated to providing our customers with a first-class car buying, selling, and renting experience.</p></li>
        </ul>

        <ul className={classes.newsLetter}>
          <h3>News Letter</h3>
          <li><p>Subscribe to our news letter for updates, news and exclusive offers</p></li>
          <li>
            <div className={classes.inputArea}>
              <input type='email' placeholder='Email' />
              <button>Subscribe</button>
            </div>
          </li>

          <li className={classes.socialIcons}>
            <FaFacebook className={classes.icon} />
            <FaTwitter className={classes.icon} />
            <FaInstagram className={classes.icon} />
          </li>
        </ul>

        <ul className={classes.contact}>
          <h3>Contact</h3>
          <li>
            <FaLocationArrow />
            <span>2038 2nd Avenue,<br />
              Las Vegas, United States</span>
          </li>
          <li>
            <FaMobile />
            <span>01444773421423 <br />
              01477678449405</span>
          </li>
          <li>
            <FaMailBulk />
            <span>info@YourCar.com</span>
          </li>
        </ul>
      </div>
    </footer >
  )
}

export default Footer