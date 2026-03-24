import './Home.css';
import { Link } from 'react-router-dom';
import {HomeData, HomeDataBlackSection, HomeDataCareers, HomeDataChooseUs, HomeDataChooseUsPoints, HomeDataDetails, HomeDataGlanceBox, HomeDataGlanceSection, HomeDataLeftText, HomeDataProcess, HomeDataProcessSec, HomeDataServices, HomeDataServicesSec} from './HomeData';
import WebTechnology from '../../assets/images/webTech.jpg';
import hp_logo from '../../assets/images/hp-logo.png';
import Google_Cloud_logo from '../../assets/images/google-cloud-logo.png';
import Amazon_Web_Services_Logo from '../../assets/images/amazon-cloud.png';
import IBM_logo from '../../assets/images/ibm-logo.png';
import Microsoft_logo from '../../assets/images/microsoft-logo.png';
import cisco_logo from '../../assets/images/ciscologo.png';
import Pivotal_Logo from '../../assets/images/pivotal-logo.png';
import adobe_logo from '../../assets/images/adobe-logo.png';

export function HomePage() {
    return (
        <div>
            <div className="image-section">
                <img src={WebTechnology} alt="Web Technology" />
                <div className="text-overlay">
                    <h1> {HomeData.title}</h1>
                    <h2>{HomeData.subTitle}</h2>
                    <Link to={HomeData.button.route} className='btn'>{HomeData.button.label} </Link>
                
                </div>

            </div>

            <div className="carousel">
                <div className="carousel-track">
                    <img src={hp_logo} alt="hp-logo" />
                    <img src={Google_Cloud_logo}  alt="Google_Cloud_logo" />
                    <img src={Amazon_Web_Services_Logo} alt="Amazon_Web_Services_Logo" />
                    <img src={IBM_logo}  alt="IBM_logo" />
                    <img src={Microsoft_logo}  alt="Microsoft_logo" />
                    <img src={cisco_logo}  alt="ciscologo" />
                    <img src={Pivotal_Logo}  alt="Pivotal-Logo" />
                    <img src={adobe_logo}  alt="adobe-logo" />
                </div>

                <div className="dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <div className="black-section">
                <div>
                    <h2> {HomeDataBlackSection.title} </h2>
                    <p> {HomeDataBlackSection.description} </p>
                    <a href="#">  READ MORE </a>
                </div>

                <div className="leftText">
                    {HomeDataLeftText.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                        
                </div>
            </div>

            <div>
                <div>
                    <div className="glanceSection">
                        <h2 > {HomeDataGlanceSection.title} </h2>
                    </div>
                    <div className='glanceContainer'>
                        {HomeDataGlanceBox.map((item, index) => (
                                <div key={index} className='glanceBox'>
                                    <h2>{item.title}</h2>
                                </div>
                            ))
                        }
                    </div>
                    <div className="chooseUs">
                        <div>
                            <h2> {HomeDataChooseUs.title} </h2>
                            <p> {HomeDataChooseUs.description} </p>
                        </div>

                        <div className="chooseUsButtonsContainer">
                            {HomeDataChooseUsPoints.map((item, index) => (
                                <div key={index}> 
                                    <h2 className="chooseUsButtons" > {item.title} </h2>
                                    <div className="js-message js-message1">
                                        <img src={item.image} alt={item.title} />
                                        {item.heading && <h3>{item.heading}</h3>}
                                            <ul>
                                                {item.points.map((point, pointIndex) => (
                                                    <li key={pointIndex}>{point}</li>
                                                ))}
                                            </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        
                    </div>
                </div>
            

                <div className="black-section1">
                    <div className="servicesSection">
                        <h2> {HomeDataServices.title}  </h2>
                        <p>{HomeDataServices.subTitle}  </p>
                        <p> {HomeDataServices.description} </p>
                    </div>
                    <div className="leftText">
                        {HomeDataServicesSec.map((items, index) => (
                                <div key={index}> 
                                    <h2> {items.title}</h2>
                                </div>
                        ))}
                    </div>
                </div>
                <div className="details">
                    <h2> {HomeDataCareers.title} </h2>
                    <p> {HomeDataCareers.description}</p>
                    <button> {HomeDataCareers.button}</button>
                </div>
                <div className="black-section1">
                    <div className="servicesSection">
                        <h2> {HomeDataProcess.title} </h2>
                        <p> {HomeDataProcess.description}  </p>
                    </div>
                    <div className="leftText">
                        {HomeDataProcessSec.map((items, index) => (
                            <div key={index}> 
                                <h2> {items.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="details">
                    <h2> {HomeDataDetails.title} </h2>
                    <p> {HomeDataDetails.description}</p>
                    <button> {HomeDataDetails.button}</button>
                </div>
            </div>
        </div>
    
    );
    
};