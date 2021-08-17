import {Field, InjectedFormProps} from "redux-form";
import {Button, Container, Grid, Paper} from "@material-ui/core";
import {CheckBoxInput, IUserKey, RenderField, TextInput} from "../helpers/renderField";
import React from "react";

import { maxLength7, required} from "../helpers/validation";
import {IUser} from "../../Types/types";

export type captchaType = {
    captcha: string | undefined
}

function LoginForm(props: InjectedFormProps<IUser, captchaType> & captchaType) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Paper style={{width: "400px"}}>
                <Container>
                    <Grid style={{padding: "10px 0px"}} container item xs={8} spacing={1}>
                        {RenderField<IUserKey>("email", TextInput, 'enter email: lismgmk2@gmail.com', [required], 'text')}
                    </Grid>
                    <Grid style={{padding: "10px 0px"}} container item xs={8} spacing={1}>
                        {RenderField<IUserKey>("password", TextInput, "enter password: '12345890'", [required, maxLength7], 'password')}
                    </Grid>
                    <Grid style={{padding: "10px 0px"}} container item xs={8} spacing={1}>
                        {RenderField<IUserKey>("rememberMe", CheckBoxInput, "rememberMe", [], 'checkBox')}
                    </Grid>
                    {props.error && <div>
                        {props.error}
                    </div>}

                    <Grid style={{padding: "10px 0px"}} container item xs={8} spacing={1}>
                        <div>
                            <Button variant="contained"
                                    color="secondary" type="submit" disabled={props.pristine || props.submitting}>Submit</Button>
                            <Button variant="contained"
                                    color="secondary" type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>Clear
                                Values
                            </Button>
                        </div>
                    </Grid>
                </Container>
            </Paper>


        </form>
    )
}

export default LoginForm