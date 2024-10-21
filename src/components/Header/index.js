import React from "react";
import * as C from "./styles";
import group2 from "../../assets/group-2.svg";
import logoPreto from "../../assets/Logo-Preto.svg";

const Header = ({ Link1, Link2, Link3, onClick }) => {
    return (
        <C.Header>
        <div className="nav">
            <div className="frame">
                <img className="group" alt="Group" src={group2} />
            </div>

            <img className="logo-preto" alt="Logo preto" src={logoPreto} />

            <div className="link">
                <div className="text-wrapper">{Link1}</div>
            </div>

            <div className="div-wrapper">
                <C.Div onClick={onClick}>
                    {Link2}
                </C.Div>
            </div>
        </div>
    </C.Header>
    )
}

export default Header;


