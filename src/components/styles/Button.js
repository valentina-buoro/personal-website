import styled from "styled-components";

export const DarkButton = styled.button`
 padding: 12px, 32px;
 font-size: 1rem;
 text-transform: uppercase;
 background: rgb(248, 217, 15);
 color: #222;
 border: 1px solid #fff;
 border-radius: 5px
 cursor: pointer;
 margin: 1rem 0.2rem;

 &:hover{
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    transition: 0.3s;
 }
`

export const LightButton = styled(DarkButton)`
 
 background: transparent;

`