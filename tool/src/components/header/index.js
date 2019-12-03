import React from 'react';
import header from './style/header.less';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
    <div className={`${header.title}`}>
        
        <div className={`${header.left}`}>
            {props.forword ? (<div className={`${header.arrow_left}`}></div>) : null}
        </div>
        <div className={`${header.title_txt}`}>
            {props.title}
        </div>
        <div className={`${header.right}`}>
            {props.backword ? (<div className={`${header.arrow_right}`}></div>) : null}
        </div>
    </div>);
};
export default Header;