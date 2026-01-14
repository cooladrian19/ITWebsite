import Helper from '../Assets/helper.png';
import { Link } from 'react-router-dom';

export default function Intro() {
    return (
        <div className="body-intro">
            <div className="intro-left">
                <h2>Hey, need tech help?</h2>
                <p >Not everyone has an IT department — and that’s where I come in. 
                    I help individuals and small businesses with everyday tech headaches like setup, troubleshooting
                    , printers that only print on full moons, and Wi-Fi that has emotional issues. If it plugs in or runs on electricity, 
                    I can most likely make it work.</p>
                    <div className='intro-bottom'>
                        <Link to="/workorder" className='submit-button'>Request Work Order</Link>
                        <div className='intro-links'>
                            <a className='learn-more'>Github</a>
                            <a className='contact-link'>Linkdn</a>
                            <a className='Website'>Website</a>
                        </div>
                    </div>
                
            </div>
            <div className="intro-right">
                <img src={Helper} alt="Helper Illustration" className='helper-image'/>
            </div>
           
        </div>
    )
}