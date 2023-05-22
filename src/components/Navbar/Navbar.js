import classes from './Navbar.module.css'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import Cart from '../Cart/Cart';
import { useState, useEffect } from 'react';

import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromJson } from '../../store/cartSlice';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false)
  const [isNavbarColored, setIsNavbarColored] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 544);
  const [showNav, setShowNav] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.totalQuantity);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 544);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const isHeroSection = scrollTop === 0;
    setIsNavbarColored(!isHeroSection);
  };

  useEffect(() => {
    dispatch(getDataFromJson())
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const handleMobileNav = () => {
    setShowNav(prev => !prev)
    if (showCart) {
      setShowCart(!showCart)
    }
  }

  const cartClickHandler = () => {
    setShowCart(prev => !prev)
    if (showNav) {
      setShowNav(!showNav)
    }
  }

  return (
    <>
      <header>
        {isMobile ? (
          <nav className={classes.mobileNav}>
            <ul>
              <ScrollLink to='home' smooth onClick={scrollToTop} className={classes.logo}><strong>Your</strong>Car</ScrollLink>
            </ul>
            <ul className={classes.cartBtnWrapper}>
              <ScrollLink className={classes.cartIcon} onClick={cartClickHandler}>
                <FaShoppingCart />
                <span>{cartItems}</span>
              </ScrollLink>
            </ul>

            <FaBars onClick={handleMobileNav} className={classes.mobileNavBtn} />

            {showNav && <ul className={classes.mobileNavItems}>
              <ScrollLink to='home' spy={true} smooth activeClass='active' onClick={scrollToTop}>Home</ScrollLink>
              <ScrollLink to='about' spy={true} smooth offset={-125} activeClass='active' onClick={scrollToTop}>About</ScrollLink>
              <ScrollLink to='services' spy={true} smooth offset={-50} activeClass='active' onClick={scrollToTop}>Services</ScrollLink>
              <ScrollLink to='cars' spy={true} smooth offset={-50} activeClass='active' onClick={scrollToTop}>Cars</ScrollLink>
              <ScrollLink to='contact' spy={true} smooth activeClass='active' onClick={scrollToTop}>Contact us</ScrollLink>
            </ul>
            }

          </nav>
        ) : (
          <nav className={isNavbarColored ? classes.coloredNav : classes.navList}>
            <ul>
              <ScrollLink to='home' smooth onClick={scrollToTop} className={classes.logo}><strong>Your</strong>Car</ScrollLink>
            </ul>
            <ul className={classes.navListItems}>
              <ScrollLink to='home' spy={true} smooth activeClass='active' onClick={scrollToTop}>Home</ScrollLink>
              <ScrollLink to='about' spy={true} smooth offset={-125} activeClass='active' onClick={scrollToTop}>About</ScrollLink>
              <ScrollLink to='services' spy={true} smooth offset={-50} activeClass='active' onClick={scrollToTop}>Services</ScrollLink>
              <ScrollLink to='cars' spy={true} smooth offset={-50} activeClass='active' onClick={scrollToTop}>Cars</ScrollLink>
              <ScrollLink to='contact' spy={true} smooth activeClass='active' onClick={scrollToTop}>Contact us</ScrollLink>
              <ScrollLink className={classes.cartIcon} onClick={cartClickHandler}>
                <FaShoppingCart />
                <span>{cartItems}</span>
              </ScrollLink>
            </ul>
          </nav>
        )}
      </header>
      {showCart && <Cart />}
    </>
  )
}

export default Navbar;