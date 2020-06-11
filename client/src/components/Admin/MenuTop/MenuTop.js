import React from "react";
import { Button} from "antd";
import {MenuOutlined, PoweroffOutlined} from '@ant-design/icons';
import PeralLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
    const { menuCollapsado, setMenuCollapsado } = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={PeralLogo}
                    alt="Alberto Peral"
                    />
                    <Button type="link" onClick={() => setMenuCollapsado(!menuCollapsado)}>
                    <MenuOutlined />
                    </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => setMenuCollapsado(!menuCollapsado)}>
                <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}