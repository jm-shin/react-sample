import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import { Menu, Input, Row, Col} from 'antd';
import LoginForm from './LoginForm';
import UserProfile from "./UserProfile";

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/jm-shin" target="_blank" rel="noreferrer noopener">Made by jm-shin</a>
                </Col>
            </Row>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;