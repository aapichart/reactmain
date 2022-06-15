import React from "react";
import './ButtonBT.css';
import {Link} from "react-router-dom";

export const ButtonBT = ({children, linktoutl, type, onClick, buttonStyle, buttonSize}) => {
    const STYLES = ['btn--primary','btn--outline','btn--test'];
    const SIZES = ['btn--medium','btn--large'];

    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0];

    return(
        <>
            <Link to={linktoutl} className='btn--outline'> 
                <button
                    className={"btn ${checkButtonStyle} ${checkButtonSize}"} 
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        </>
    );
};
export default ButtonBT;
