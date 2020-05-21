import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>Personal Area</div>
            <div className={style.loginBlock}>Profile Name</div>
        </div>
    )
}

export default Header;