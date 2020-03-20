import React, { useState, useEffect } from "react"; 
import axios from "axios"; 

import {Container, Row} from "reactstrap"; 
import StarWarsCard from "./StarWarsCard"; 

const MappedCard = () => {

    const [resident, setResident] = useState([]); 


    useEffect (() => {
  
      axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response)
        setResident(response.data.results); 
  
      })
  
      .catch(error => {
        console.log(`You got an error`, error)
      })
  
  
    }, [])
  
    console.log(resident)

    return (
    <Container>
        <Row>
            {resident.map(character => {
            return <StarWarsCard
            character={character}
            />
            })}
        </Row>
    </Container>
        
      );



}


export default MappedCard; 
