import React from "react"
import styled from "styled-components"; 
import {Card, CardHeader, CardBody, CardText, Col} from "reactstrap"; 

const Header = styled.h2`
    font-size: 1.3rem; 
    color: cyan; 
    padding: 20px 30px; 
    background: orange; 
    width: 50%; 
`; 

const FlexDiv = styled.div`
    display:flex; 
    justify-content:center;
    align-items:center; 
    flex-direction:column; 
    border: 3px solid red;
    margin-bottom: 3%;
    background:black;  
    color: white; 
    width: 30%; 
`;

const TheP = styled.p`
    font-size: 1.4rem;
    display:flex; 
    flex-direction:column;
    align-items:center; 
    color:white; 

`;

const InfoDiv = styled.div`

`;

const CardsCont = styled.div`
    display:flex; 
    align-items:center; 
    flex-direction:column; 
    

`;

const StarWarsCard = ({ character }) => {

return (

    <div>
        <CardsCont>
            <FlexDiv>
                <TheP>This character is: <Header>{character.name}</Header> </TheP>
                <CardBody>
                    <CardText>They are {character.height}cm tall </CardText>
                    <CardText>This character has a mass of {character.mass}kg, a hair color of {character.hair_color} and has {character.vehicles.length} whips in the garage</CardText>
                </CardBody>
            </FlexDiv>
        </CardsCont>
    </div>
)

}

export default StarWarsCard; 