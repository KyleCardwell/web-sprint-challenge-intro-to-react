import react from 'react';
import styled from 'styled-components';
import Character from './Character'


const StyledCharacterGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
    align-content: center;

`;


export default function CharacterGroup(props) {

    const { characterList } = props;

    console.log(characterList)
    
    return (
        <StyledCharacterGroup>
            {characterList.map(char => {
                return <Character key={char.name} character={char} />
            })};
    
        </StyledCharacterGroup>
    )
};