import { blackSection2, leftText, serviceIntro, ServicesBlackSection } from "./ServicesData";
import "./Services.css";


export function ServicesPage() {
    return(
        <div>
            <div className="ServicesBlackSection">
                <a href={ServicesBlackSection.home.link} className="homeButton"> {ServicesBlackSection.home.label} </a>/<a> {ServicesBlackSection.current.label}</a>
                <h2> {ServicesBlackSection.title} </h2>
            </div>
            <div className="serviceIntro"> 
                <h2> {serviceIntro.title} </h2>
                <p> {serviceIntro.description} </p>
            </div>
            <div className="black-section1">
                
                <div className="servicesSection"> 
                    <h2> {blackSection2.title} </h2>
                    <p> {blackSection2.description} </p>
                </div>
                    
                <div className="ServicesLeftText">
                    {leftText.map((item)=> (
                        <div key={item.id}>
                            <h2> {item.title} </h2>
                            <p> {item.description} </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )};
                        
                          
            
                