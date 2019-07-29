/* 
Button is a reusable component which can be used anywhere in the application.
Includes className and buttonText.

@author  Vihanga Naik & Sujita Patil 
@since 2019-02-05 */

import React from 'react';
const Button = (props) => {
    return (
        <div>
            <button className={props.className}>{props.buttonText}</button>
        </div>
    )
}
export default Button;