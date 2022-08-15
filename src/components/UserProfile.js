import React, {useCallback} from "react";
import {Card, Avatar, Button} from 'antd';
import {useSelector} from "react-redux";
import {logoutAction} from "../reducers";

const UserProfile = () => {
    const dispatch = useSelector();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짹짹 <br/>0</div>,
                <div key="followings">팔로잉 <br/>0</div>,
                <div key="followers">팔로워 <br/>0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>JM</Avatar>}
                title="jongmin"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;