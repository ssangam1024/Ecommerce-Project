import './Contact.css'
import { AddressSection, CallFormSection, ContactDataBlackSection, contactPageContent, ContactPageContent,contactForm, EmailFormSection } from "./ContactData";


export function ContactPage( ){
    return(
        <div>
            <div className="AboutUsBlackSection">
            <a href={ContactDataBlackSection.home.link} className="homeButton"> {ContactDataBlackSection.home.label} </a>/<a> {ContactDataBlackSection.current.label}</a>
            <h2> {ContactDataBlackSection.title} </h2>
            </div>
            <div className="contactPageContent"> 
            <h1 className="underline"> {ContactPageContent.title} </h1>
            <p> {ContactPageContent.description} </p>
            </div>
            <div className='contact-section'>
                <div className='left-info'> 
                    <div className='address-form'> 
                        <div className='icon'> 
                            <img src={AddressSection.img}  /> 
                        </div>
                        <h4>{AddressSection.title}  </h4>
                        <p> <strong> Head Quarters: </strong> {AddressSection.description} </p>
                    </div> 
                    <div className='small-info-boxes'> 
                        <div className='email-form'> 
                            <div className='icon'> 
                                <img src={EmailFormSection.img} />
                            </div>
                            <h4> {EmailFormSection.title} </h4>
                            <p> {EmailFormSection.description} </p>
                        </div>
                        <div className='call-form'> 
                            <div className='icon'> 
                                <img src={CallFormSection.img} />
                                </div>
                            <h4>{CallFormSection.title}</h4>
                            <p> {CallFormSection.description} </p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group"> 
                            <input type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <input type="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group"> 
                        <input type="services" placeholder="Select Services" />
                    </div>
                    <div className="form-group">
                        <textarea rows={7} placeholder="Message"></textarea>
                    </div>

                    <button type="submit" className="btn-sendMessage"> {contactForm.button} </button>
                </div>
            </div>
            <div className="contactPageContent">
                <h1 className="underline"> {contactPageContent.title}  </h1>
                <div className="mapcontainer"> 

                <iframe src= {contactPageContent.img} width="900" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};