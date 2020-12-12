import React from 'react';
import {ScrollView, Text} from 'react-native';
import style from './style'
import Header from '../Header'

const Profile = () => {
    return (
        <>
        <Header/>
        <ScrollView style={style.container}>
            <Text style={style.text}>Estamos em obra!!</Text>
            <Text style={style.text}>Desculpe o transtorno!!</Text>
        </ScrollView>
        </>
    )
}

export default Profile;