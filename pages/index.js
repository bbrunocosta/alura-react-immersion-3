import MainGrid from '../src/components/MainGrid'
import {useState} from 'react'
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraCommons'
import ProfileSideBar from '../src/components/ProfileSideBar'
import AsideComponent from '../src/components/AsideComponent'
import CommunityForm from '../src/components/CommunityForm'


export default function Home() {

  const [comunidades, setComunidades] = useState(['javascript', 'react', 'nextjs'])
  const handleComunidadeSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    setComunidades([...comunidades, data.get('title')])
  }
  const githubUser = 'bbrunocosta'
  const favoriteProfiles = ['filipedeschamps', 'diego3g', 'akitaonrails', 'maykbrito', 'programadorabordo','rmanguinho', 'guilhermesilveira']
  return( <>
    <AlurakutMenu githubUser={githubUser} />
    <MainGrid>
      <div className="profileArea" style={{gridArea:"perfilArea"}}>
        <ProfileSideBar user={githubUser} avatar={`https://github.com/${githubUser}.png`}/>
      </div>

      
      <div  className="wellcomeArea" style={{gridArea:"wellcomeArea"}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
          <h2 className="subtitle">O que você deseja fazer?</h2>
          <CommunityForm 
              buttonText="Criar comunidade"
              onSubmit={handleComunidadeSubmit} 
              inputs={
                [
                  {
                      placeholder:"Qual vai ser o nome da sua Comunidade?",
                      name:"title",
                      ariaLabel:"",
                      type:"text"
                  },
                  {
                      placeholder:"Coloque uma url para usarmos de capa",
                      name:"image",
                      ariaLabel:"",
                      type:"text"
                  }
              ]
          }/>
          </Box>
      </div>
      
      <div className="profileRelationsArea" style={{gridArea:"profileRelationsArea"}}>
          <AsideComponent 
            title={`Pessoas da comunidade (${favoriteProfiles.length})`}
            items={favoriteProfiles}
            maxItens={6}   />

          <AsideComponent 
            title={`Minhas comunidades (${comunidades.length})`}
            items={comunidades}
            maxItens={6}   />
      </div>
    </MainGrid>
  </> )
}
