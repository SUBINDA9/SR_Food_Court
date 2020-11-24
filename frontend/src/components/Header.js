import { Link } from "react-router-dom";
import React  from 'react';



const Header = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <li><Link className="navbar-brand" to='/'>Edumato</Link></li>
                        
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="">
                        <Link to='/'>Home</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;