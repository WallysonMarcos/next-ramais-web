import style from 'styled-components';

export const CardContainer = style.div`
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 300px;
    height: 160px;
    -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15);

    &:hover {
        color: #06233D;
        border-color: #06233D;
        -webkit-box-shadow: 0px 0px 18px 0px #06233D5b;
        -moz-box-shadow: 0px 0px 18px 0px #06233D5b;
        box-shadow: 0px 0px 18px 0px #06233D5b;  
    } 
`;

export const CardTitle = style.h2` 
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  color: #06233D; 
`;

export const CardItem = style.div`   
    padding-top: 0.11rem; 
`;


export const CardText = style.span`    
    font-size: 1rem;
    line-height: 1.5;
    color: #212222; 
    margin-left: 0.5rem; 
`;

