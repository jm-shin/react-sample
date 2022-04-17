import React from "react";
import Head from 'next/head';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";


const Profile = () => {
    const followerList = [{ nickname: 'nick'}, {nickname: 'nick2'}, {nickname: 'nick3'}];
    const followingList = [{ nickname: 'nick'}, {nickname: 'nick2'}, {nickname: 'nick3'}];

    return (
        <>
            <Head>
                <div>내 프로필</div>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
}

export default Profile;