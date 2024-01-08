import { useState } from "react";
import { Link } from "react-router-dom";
    function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        const handleToggle = () => {
            setIsOpen(!isOpen);
        };
        return(
            <nav className="fixed-top">
                <div className = "logo">
                    <img src="image/logo.png" alt="puskesmas guntur" className="w-10 h-10 ml-0"/>
                </div>
                        <ul className={`nav-links ${isOpen? 'slide' :''}`}>
                            <li>
                                <Link to="/">Home</Link> 
                            </li> 
                            <li>
                                <Link to="/antrian">Antrian</Link> 
                            </li> 
                            <li>
                                <Link to="/add">Tambah Pasien</Link> 
                            </li> 
                        </ul>     
                    <div  className="menu-toogle" >
                        <input type="checkbox" checked={isOpen} onChange={handleToggle}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
            </nav>
        );
    }
export default Navbar