import {Link as RouterLink} from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography} from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { checkingAuthentication, startGoogleSignIn, startLoginEmailPassword } from "../../store/auth/thunks"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useMemo } from "react"

export const LoginPage = () => {

    const {status, errorMessage} = useSelector(state=>state.auth);
    //const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {email, password, onInputChange} = useForm({
        email: "",
        password: ""
    })
    const isAuthenticating = useMemo(()=>status === "checking", [status]);

    const onSubmit = (event) =>{
        event.preventDefault();
        //esta no es la accion a despachar
        dispatch(startLoginEmailPassword({email,password}));
    }
    
    const onGoogleSignIn = ()=>{
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title= "Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid 
                        container
                        display={!!errorMessage ? "":"none"}
                        sx={{mt:1}}>
                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? "":"none"}
                        >
                        <Alert severity="error">
                            {errorMessage}
                        </Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled={isAuthenticating}
                                type="submit" 
                                variant="contained" 
                                fullWidth
                                onClick={onSubmit}
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled={isAuthenticating}
                                variant="contained" 
                                fullWidth 
                                onClick={onGoogleSignIn}
                            >
                                <Google/>
                                <Typography sx={{ml:1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Create account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
