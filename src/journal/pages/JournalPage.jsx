import { AddOutlined, MailOutline } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view/NoteView"
import { NothingSelectedView } from "../view/NothingSelectedView"


export const JournalPage = () => {
    return (
        <JournalLayout>
            {/*
            <Typography>dasdas sadsadasdas asdasdasdasdsad asdasdsadqweqwe qwe asdqwdasdffg qe sd qwerwqdasffdsf sdfqweasfdfsdfqf dasdas sadsadasdas asdasdasdasdsad asdasdsadqweqwe qwe asdqwdasdffg qe sd qwerwqdasffdsf sdfqweasfdfsdfqf</Typography>
            */}

            
            <NothingSelectedView/>
            
            {/*<NoteView/>*/}

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor:"error.main",
                    ":hover":{backgroundColor: "error.main", opacity:0.7},
                    position: "fixed",
                    right:50,
                    bottom:50
                }}
            >
                <AddOutlined sx={{fontSize:30}}/>
            </IconButton>
        </JournalLayout>
    )
}
