import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, Grid, ListItemText } from "@mui/material"
import {TurnedInNot} from "@mui/icons-material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux";



export const Sidebar = ({drawerWidth=240}) => {

    const {displayName} = useSelector(state => state.auth);
    console.log(displayName)

    return (
        <Box
            component="nav"
            sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}
        >
            <Drawer
                variant="permanent" //temporary
                open //open={true}
                sx={{
                    display:{xs:"block"},
                    "& .MuiDrawer-paper":{boxSizing:"border-box", width:drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {
                            (displayName)
                        }
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        ["enero","febrero","Marzo","Abril"].map(text=>(
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={"asdsad assa sad sa dsadsadsadsadsadsa"}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
