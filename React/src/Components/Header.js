import React from 'react';

function Header({name, title}) {
    return (
        <div style={{background:"blue", color: "white"}}>
            <h1>{name}</h1>
            <br></br>
            <h2>{title}</h2>
        </div>
    );
}

export default Header;
