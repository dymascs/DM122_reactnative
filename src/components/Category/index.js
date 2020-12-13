import React from 'react';
import {ScrollView} from 'react-native';
import CategoryList from '../CategoryList';
import style from './style';

const Category = ({navigation}) => {
    return (
            <ScrollView style={style.container}>
                <CategoryList navigation={navigation}/>
            </ScrollView>
    )
}

export default Category;