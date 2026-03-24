import { AboutUsBlackSection, Container, statsData, Container2 } from "./AboutData";
import aboutUs from "../../assets/images/aboutUs1.jpg";
import approach from "../../assets/images/approach.jpg";
import './About.css';
import { useState, useEffect  } from "react";


function Counter({value}:{value:number}) {
        const [count, setCount] = useState(0);

        useEffect (()=> {
            let start = 0;
            const durationTime= 2000;
            const skip= 100;
            const totalSteps = (durationTime / 1000) * skip; 
            const increment = Math.ceil(value / totalSteps); 
            const stepTime = durationTime / totalSteps;

            const timer = setInterval(() => { 
                start += increment; 
                setCount(start); 
                if (start >= value) clearInterval(timer);
                }, stepTime);
            return () => clearInterval(timer);
        }, [value]);

        return <h2>{count}+</h2>;
    }

export function AboutPage() {
    return (
        <div>
            <div className="AboutUsBlackSection">
                <a href={AboutUsBlackSection.home.link} className="homeButton"> {AboutUsBlackSection.home.label} </a>/ <a> {AboutUsBlackSection.current.label}</a>
                <h2> {AboutUsBlackSection.title} </h2>
            </div>

            <div className="Container"> 
                <div className="InfoContainer">
                    <h1> {Container.title}</h1> 
                    <p> {Container.description}</p>    
                </div>
                <img src={aboutUs} alt="About Us" className="aboutUsImage" />
            </div>
            <div className="stats">
                {statsData.map((item) => (
                <div className="statbox" key={item.id}>
                
                <div className="icon">
                    <img src={item.icon} alt={item.alt} />
                </div>

               <Counter value ={item.value} />

                <p> + </p>
                <p>{item.label}</p>

                </div>
                ))}
            </div>

            <div className="Container">
                <img src={approach} alt="approach" className="aboutUsImage" /> 
                <div className="InfoContainer"> 
                    <h1>{Container2.title}</h1>
                    <p> {Container2.description}</p>
                </div>

            </div>
        </div>
    )
}