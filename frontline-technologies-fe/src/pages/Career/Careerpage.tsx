import { CareerBlackSection, CareerContainer} from "./CareerData";
import careerImage from "../../assets/images/career.jpg"
import "./Career.css"

export  function CareerPage( ){
    return(
        <div> 
            <div className="CareerBlackSection">
                <a href={CareerBlackSection.home.link} className="homeButton"> {CareerBlackSection.home.label} </a>/<a> {CareerBlackSection.current.label}</a>
                <h2> {CareerBlackSection.title} </h2>
            </div>
            <div className ="CareerContainer"> 
                <h2> {CareerContainer.title} </h2>
                <p> {CareerContainer.description} </p>
            </div>
            <div className="career-section">
                <div className="career-image">
                  <img src={careerImage} alt="Build Your Career" />
                </div>
            
                <div className="career-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
            
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" />
                    </div>
            
                    <div className="form-group">
                      <label>Upload resume</label>
                      <input type="file" />
                    </div>
            
                    <div className="form-group">
                      <label>Message</label>
                      <textarea rows={4} placeholder="Message"></textarea>
                    </div>
            
                    <button type="submit" className="btn-submit">Submit</button>
                
                </div>
            </div>
        </div>
    )
}
