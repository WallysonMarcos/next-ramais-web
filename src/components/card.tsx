import React from "react";
import { RamalType } from "../types/ramal";
import styles from '../styles/Home.module.css';
import { FiPhone, FiMapPin } from 'react-icons/fi'


import { CardContainer, CardTitle, CardItem, CardText } from './style';

export default function Card({ number, name,local }: RamalType){
 

    return (
        <CardContainer>
            <CardTitle>{name?.toLocaleUpperCase()}</CardTitle>
            <CardItem> 
                <FiPhone color="#06233D"/>
                <CardText>{number}</CardText>
            </CardItem>
            <CardItem > 
                <FiMapPin color="#06233D"/>
                <CardText>{local?.toLocaleUpperCase()}</CardText>
            </CardItem>
            
        </CardContainer>
    )
}