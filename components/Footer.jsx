import React from 'react';
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
// import Asset16 from '../../Resources/Photos/Asset16.png';
import { Link } from 'next/link';
// import { useTranslation } from 'react-i18next';



function Footer() {
//   const { t, i18n } = useTranslation();
  return (
    
    <div className="container">

<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
{/* <div className='footer-container'>


    
      
 
<div className='footer-links'>
      
  <div className='footer-link-wrapper'>
    <div className='footer-link-items'>
    <Link className=' my-2'  href='/' ><a><img src="/Photos/Asset16.png" alt="Ariadne Logo" width="140x"/></a></Link>
    </div>

    <div className='footer-link-items'>
      <h3>Solutions</h3>
      <Link href='/ariadne-mapping'>Ariadne Mapping</Link>
      <Link href='/ariadne-navigation'>Ariadne Navigation</Link>
      <Link href='/ariadne-analytics'>Ariadne Analytics</Link>
      <Link href='/ariadne-engagement'>Ariadne Engagement</Link>
      
    </div>
  </div>

  <div className='footer-link-wrapper'>
    
  <div className='footer-link-items'>
      <h3>Company</h3>
      <Link href='/about-us'>About Us</Link>
      <Link href='/why-ariadne'>Why Ariadne</Link>
      
      <Link href='/blog'>Blog</Link>
      <Link href='/careers'>Careers</Link>
    </div>

    <div className='footer-link-items'>
      <div>
    
    
      <button id='hero-xxl-button' type="button" className="mb-2"
						><p className='my-1 mx-3 text-light fs-5 fw-bold    lh-md' style ={{fontFamily:'Poppins'}}>Lets Talk</p></button>

      </div>
      <div className="para">

      <p>Ariadne Maps GmbH

Brecherspitzstraße 8 <br/>

81541 München<br/>
+49 174 4079675

contact@ariadnemaps.com
</p>


      </div>
      
<div style={{fontSize:'20px'}}>
<a style={{marginRight:'15px'}} href='https://www.facebook.com/ariadnemaps/'><i className='fab fa-facebook-f' /></a>
      <a className= 'mx-3' href='https://www.youtube.com/channel/UCetG3dxFlJrFno0ChaJ5VXQ'><i className='fab fa-youtube' /></a>
      <a className= 'mx-3' href='https://twitter.com/ariadne_maps'><i className='fab fa-twitter' /></a>
      <a className= 'mx-3' href='https://www.linkedin.com/company/ariadne-maps'><i className='fab fa-linkedin' /></a>
</div>
            </div>


  </div>
</div>

<hr className = 'divider'/>

<section className='social-media'>
  <div className='social-media-wrap'>
   <div>
    <small className='website-rights'>© 2019 - 2022 Ariadne Maps GmbH. All rights reserved.</small>

   </div>
    
    <div className='social-icons'>
      <Link
        className='social-icon-link facebook'
        href='/privacy'
       
      >
        Privacy Policy
      </Link>
      <Link className='social-icon-link instagram'
        href='/'>Impressum</Link>
     
    </div>
  </div>
</section>
</div> */}
    </div>
  );
}

export default Footer;

 