import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import Titulo from '../../assets/Titulo'
import Logo from '../../assets/Logo.svg'

export default function Header () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <img
              src={Logo}
              alt='La toyma logo'
              width={50}
              height={70}
              style={{ margin: 4 }}
            />
            <Box width='90%' display='flex' justifyContent={'center'}>
              <Titulo />
            </Box>
            <Typography variant='body2' component='i' color='inherit'>
              Desde 1997
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  )
}

function HideOnScroll (props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}
