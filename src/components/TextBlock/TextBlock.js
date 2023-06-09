import React from "react";
import style from "./TextBlock.module.css";

const TextBlock = ({ text, variant }) => {
    //let varClass = style[variant]
    return (
        <div className={`${style.container} ${style[variant]}`}>
            <p className={style.text}>{text}</p>
        </div>
    );
};

export default TextBlock;
