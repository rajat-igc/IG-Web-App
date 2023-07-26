import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
// import './_layout.scss'
import { NavLink } from "react-router-dom"
import styles from './_layout.scss';

const Navbar = () => {
    return (
        <>
            <Box>
                <AppBar className="app_bar" color='secondary'>
                    <Toolbar>
                        <Typography variannt='h1' component='div' sx={{ flexGrow: 1 }}>Intelligraph</Typography>
                        <Button component={NavLink} to='/' sx={{ color: 'white', textTransform: 'none' }} style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#6d1b7b',
                                }
                                : {}
                        }>Home
                        </Button>
                        {/* <Button component={NavLink} to='/contact' sx={{ color: 'white',textTransform:'none' }} style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#6d1b7b',
                                }
                                : {}
                        }>Contact
                        </Button> */}
                        <Button component={NavLink} to='/loginReg' sx={{ color: 'white', textTransform: 'none' }} style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#6d1b7b',
                                }
                                : {}
                        }>Login/SignUp
                        </Button>
                        {/* <Button className="new_button" >
                            Verify
                        </Button> */}

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar