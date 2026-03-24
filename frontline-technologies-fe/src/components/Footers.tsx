import Frontlinelogo from '../assets/images/FrontlineLogo.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.jpg';
import instagram from '../assets/images/insta.jpg';
import skype from '../assets/images/skype.png';
import linkedin from '../assets/images/linkedin.png';
import './Footer.css';


export function Footer() {
    return ( 
        <div>   
            <div className ="footerTop" >

                <div className='addressInfo'>
                    <img src={Frontlinelogo} alt="Frontline Logo" className='logoFooter'/>
                    <p>
                    <strong> Head Quarters: </strong> 1-9-734/B, Postal Colony 2lane, Subedari, Hanamkonda  <br/>
                    <strong> Phone </strong>  xxxxxxxxxx <br/>
                    <strong> Email </strong> info@Frontline.com
                    </p>
                </div>

                <div className="container1"> 
                    <strong className= "underline"> Useful Links </strong> <br /> 
                    <a> Home </a> <br /> 
                    <a> About us </a> <br /> 
                    <a> Services </a> <br /> 
                    <a> Careers </a> <br /> 
                    <a> Contact </a> 
                </div>
                <div className="container2"> 
                    <strong className= "underline"> Our Services </strong> <br />
                    <a> Data Science</a> <br />
                    <a> Cyber Security Solutions </a> <br />
                    <a> Cloud Services </a> <br />
                    <a> Microsoft Technologies </a> <br />
                    <a> Infrastructure Solutions</a> <br />
                    <a> Packaged ERP Applications </a> <br />
                    <a> Application Development Management Solutions</a> 
                </div>
                <div className="container2">
                    <strong className= "underline">Join Our Newsletter</strong> <br />  
                    <p> Get personalized Staffing Solutions and IT Consultancy for all your concerns. We serve almost all the industry verticals, therefore be assured of nothing but the best for yourself. Contact us for a mutually beneficial partnership</p>
                    <div className="searchBox "> <input type="text" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div> 
            <div className="footerBottom">
            <p> © Copyright <strong> Frontline Technologies.</strong> All Rights Reserved <br />
                    Designed by <span style={{color: 'red'}}> Frontline Technologies </span>  </p>
                <div className="iconbox" >
                    <div className="icon1"><img src={twitter} alt="twitter" /> </div>
                    <div className="icon1"> <img src={facebook} alt="facebook" /> </div>
                    <div className="icon1"><img src={instagram} alt="instagram" /> </div>
                    <div className="icon1"><img src={skype} alt="skype" /> </div>
                    <div className="icon1"><img src={linkedin} alt="linkedin" /> </div>       
                </div>
            </div>
      </div> 
      
    );
}