import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

function ProfileSideBar ({avatar}){
  return(
    <Box>
      <img src={avatar} style={{borderRadius:'8px'}}/>
    </Box>
  )
}



export default function Home() {
  const githubUser = 'bbrunocosta'
  const favoriteProfiles = ['filipedeschamps', 'diego3g', 'akitaonrails', 'maykbrito', 'programadorabordo','rmanguinho', 'guilhermesilveira']
  return( <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{gridArea:"perfilArea"}}>
        <ProfileSideBar avatar={`https://github.com/${githubUser}.png`}/>
      </div>
      <div  className="wellcomeArea" style={{gridArea:"wellcomeArea"}}>
      <Box>
        <h1 className="title">
          Bem vindo(a)
        </h1>
        <OrkutNostalgicIconSet/>
      </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea:"profileRelationsArea"}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da comunidade ({favoriteProfiles.length})
        </h2>
        <ul>
        {
          favoriteProfiles.map((githubUser, i) => i < 6 ?(
              <li key={githubUser} style={{listStyle:'none'}}>
                <a href={`/${githubUser}`}>
                  <img src={`https://github.com/${githubUser}.png`}/>
                  <span>{githubUser}</span>
                </a>
              </li>
            ):null)
        }
        </ul> 
      </ProfileRelationsBoxWrapper >
      </div>
    </MainGrid>
  </> )
}
