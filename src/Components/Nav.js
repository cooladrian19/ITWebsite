import { Link } from "react-router-dom"
import "./styles.css"

export default function Nav() {
    return (
    <nav className="nav-contain">
        <div className="left-contain">
            <Link className="title-gradient hover-line" to="/home">
                adrian.it </Link>            
        </div>
        <div className="right-contain">
            <div>
            <Link className="hover-line">Services</Link>
        </div>
        <div>
            <Link className="hover-line">Portfolio</Link>
        </div>
        <div>
            <Link to="/about" className="hover-line">About</Link>
        </div>
        </div>
    </nav>
)
}
