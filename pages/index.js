import MainGrid from '../src/components/MainGrid'

export default function Home() {
  return(
    <MainGrid>
      <div className="profileArea" style={{gridArea:"perfilArea"}}>
      <Box>
       Profile
      </Box>
      </div>
      <div  className="wellcomeArea" style={{gridArea:"wellcomeArea"}}>
      <Box>
        Bem Vindo
      </Box>
      </div>
      <div  className="profileRelationsArea" style={{gridArea:"ProfileRelationsArea"}}>
      <Box>
        Comunidade
      </Box >
      </div>
    </MainGrid>
  ) 
}
