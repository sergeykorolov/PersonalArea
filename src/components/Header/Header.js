import React from "react";
import style from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.logo}>Personal Area</div>
            <div className={style.loginBlock}>
                {props.isAuth ? <button disabled={props.buttonActive} onClick={props.logout}>logout</button> : null}
            </div>
        </div>
    )
}

export default Header;