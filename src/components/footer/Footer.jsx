import React from 'react'
import { useTranslation } from 'react-i18next';
import './footer.css'

// Icons
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { SiWhatsapp } from 'react-icons/si';


function Footer() {
  const { t } = useTranslation("translate");

 
  return (
    <>
     {/* ------ Footer section ------- */}
      <section id='footer'>
        <div className="footer-cont">
          <div className="footer-links">

            <div className="footer-1 link-cont">
              <div className="logo">
                  <img src='/assets/Lewa.png' alt="Logo"/>
                  <p>Liwa Soft</p>
                  {/* <span className="animate" style={i1}></span> */}
              </div>
              <p>
              Liwa Soft was officially established in June 2020. With 8 years of experience in the restaurant sector and 27 years in the field of information technology, we have made unique contributions with our colleagues who have added fresh blood to the industry. Customer satisfaction is our most important principle, and we are proud to say that our current customer satisfaction rate is 100%.
              </p>
            </div>

            <div className="footer-2 link-cont">
              <p>Corporate</p>
              <a href="/">Link One</a>
              <a href="#about">Link Two</a>
              <a href="#product">Link Three</a>
              <a href="#">Link Four</a>
              {/* <span className="animate" style={i3}></span> */}
            </div>

            <div className="footer-3 link-cont">
              <p>Important Links</p>
              <a href="products">Link One</a>
              <a href="products">Link Two</a>
              <a href="products">Link Three</a>
              <a href="products">Link Four</a>
              <a href="products">Link Five</a>
              {/* <span className="animate" style={i4}></span> */}
            </div>

            <div className="footer-4 link-cont">
              <p></p>
              <a href="products">Link One</a>
              <a href="products">Link Two</a>
              <a href="products">Link Three</a>
              <a href="products">Link Four</a>
              <a href="products">Link Five</a>
              
              <div className="social">
            <a href='https://www.facebook.com/liwasoft/' className="fb"><FaFacebookF /></a>
            <a href='https://www.instagram.com/liwasoft/' className="ins"><FaInstagram/></a>
            <a href='https://www.youtube.com/channel/UCk9flKQF502tzxmDo_4VPbw' className="yt"><IoLogoYoutube/></a>
            <a href='https://web.whatsapp.com/send?phone=908508407807&text=Merhaba' className="wa"><SiWhatsapp/></a>
          </div>
              {/* <span className="animate" style={i5}></span> */}
            </div>

          </div>

          <div className="footer-copy">
            <p>© 2024 Liwa Soft. All rights reserved || by</p>
            <a href='https://www.ibrahimali.net'>Ibrahim Ali</a>
           {/*  <span className="animate" style={i6}></span> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;