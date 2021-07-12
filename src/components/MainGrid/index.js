import styled from 'styled-components'
const MainGrid = styled.main`
    display: grid;
    grid-gap: 10px;
    width 100%
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding:16px;

    .profileArea{
      display: none;
      @media screen and (min-width: 860px){
        display: block;
      }
    }
    @media screen and (min-width: 860px){
      margin: 0;
      grid-template-columns: 160px 1fr 312px;
      grid-template-areas: "perfilArea wellcomeArea profileRelationsArea"
    }
`;
export default MainGrid
