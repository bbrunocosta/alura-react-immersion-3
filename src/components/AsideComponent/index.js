import {ProfileRelationsBoxWrapper} from '../ProfileRelations'
function AsideComponent ({title, items, maxItens}){
    return(
      <ProfileRelationsBoxWrapper as="aside">
      <h2 className="smallTitle">
        {title}
      </h2>
      <ul>
      {
        items.map((item, i) => i < maxItens ?(
            <li key={item} style={{listStyle:'none'}}>
              <a href={`/${item}`}> 
                <img src={`https://github.com/${item}.png`}/>
                <span>{item}</span>
              </a>
            </li>
          ):null)
      }
      </ul> 
    </ProfileRelationsBoxWrapper >
    )
  }
  export default AsideComponent