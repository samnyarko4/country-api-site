import { Button, Box } from 'theme-ui'
import {  useColorMode } from "theme-ui";
import {useState} from 'react'
function Nav () {
  const [colorMode, setColorMode] = useColorMode();
  const [themestate, setThemeState] = useState("light");
    return (
      <Box bg="primary" className='top-bar flex text-left justify-between'>
      <h1>Where In The World?</h1>
      
    <Button  
      onClick={() => {
        setColorMode(colorMode === "light" ? "dark" : "light");
        setThemeState(colorMode === "light" ? "dark" : "light");
      }}
    > <div>{themestate === "light" ? <div> Dark</div> : <div>Light</div>}</div></Button>
  
  </Box>
    )
}
export default Nav