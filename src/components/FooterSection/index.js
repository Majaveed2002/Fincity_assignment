import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {BsEnvelopeFill} from 'react-icons/bs'
import './index.css'

const FooterSection = () => (
  <div id="footerSection">
    <div className="icons-container">
      <AiFillInstagram size={50} />
      <AiFillLinkedin size={50} />
      <BsEnvelopeFill size={50} />
    </div>
    <p className="footer-description">Copyright © 2024. All rights reserved</p>
    <img
      src="https://res.cloudinary.com/daqedhqtx/image/upload/v1704417293/Vector_yrismb.jpg"
      alt="footer-img"
    />
  </div>
)

export default FooterSection
