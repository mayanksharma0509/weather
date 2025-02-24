import React from "react";

const AuthField = (props) => {

    const {isLabelRequired,
        labelText,
        fieldType,
        fieldAriaLabel,
        fieldPlaceHolder,
        onChange} = props;


    return(
        <React.Fragment>
            <div >
                {isLabelRequired &&
                    <label>{labelText}</label>
                }
                <input placeholder={fieldPlaceHolder} type={fieldType} aria-label={fieldAriaLabel} onChange={onChange} />
            </div>
        </React.Fragment>
    )
}

export default AuthField;