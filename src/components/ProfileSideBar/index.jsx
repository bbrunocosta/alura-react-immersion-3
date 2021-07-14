import Box from '../Box'
import {AlurakutProfileSidebarMenuDefault} from '../../lib/AluraCommons'
function ProfileSideBar ({avatar, user}){
    return(
      <Box as="aside">
        <img src={avatar} style={{borderRadius:'8px'}}/>
        <hr/>
        <a href={`https://github.com/${user}`}>
          @{user}
        </a>
        <hr/>
        <AlurakutProfileSidebarMenuDefault/>
      </Box>
    )
  }
  export default ProfileSideBar