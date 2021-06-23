import React from 'react';
import './Header.css';

// header component contains the text to be displayed
const Header = () => {
    return (
        <div className="row">
            <div className="col-md-12 header">
                <h1 className="h1">Password and Pin Generator</h1>
                <div className="col-md-12">
                    <h4>
                        Create strong passwords and pin numbers
                    </h4>
                </div>
            </div>
        </div>
    )
}
export default Header;

