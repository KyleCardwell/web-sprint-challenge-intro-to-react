// Write your Character component here
import react from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    font-size: 20px;
    color: white;
    background-color: black;
    font-weight: 700;
    margin: 20px;
    padding: 10px;
    border: 4px solid ${props => props.theme.starWarsYellow};
    width: 10%;
    display: flex;
    justify-content: space-between;
`

    
export default function Character({ character }) {
    return (
        <StyledCharacter>
            {character.name}
            <button>+</button>
        </StyledCharacter>
    )
    };
