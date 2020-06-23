import React from "react";
import cls from './Forms-controls.module.css'


export const renderField = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cls.formControl + ' ' + (hasError ? cls.error : '')}>
            <div>
                {props.typeField==='input'
                    ? <input {...input} {...props}/>
                    : <textarea {...input} {...props}/>}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}