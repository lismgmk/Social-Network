import {Field, InjectedFormProps} from "redux-form";
import {Button, Container, Grid} from "@material-ui/core";
import {CheckBoxInput, TextInput} from "../helpers/renderField";
import React from "react";
import {IUser} from "../../Api/api";
import {isEmail, maxLength7, required} from "../helpers/validation";


function LoginForm(props: InjectedFormProps<IUser>) {
    const {handleSubmit, pristine, reset, submitting} = props
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Grid container item xs={8} spacing={1}>
                    <Field
                        name="email"
                        component={TextInput}
                        label="Email"
                        validate={[required, isEmail]}
                    />
                </Grid>
                <Grid container item xs={8} spacing={1}>
                    <div>
                        <Field
                            name="password"
                            component={TextInput}
                            type='password'
                            label="password"
                            validate={[required, maxLength7]}
                        />
                    </div>
                </Grid>
                <Grid container item xs={8} spacing={1}>
                    <div>
                        <Field
                            type='checkBox'
                            name="rememberMe"
                            label="rememberMe"
                            component={CheckBoxInput}/>
                    </div>
                </Grid>
                <Grid container item xs={8} spacing={1}>
                    <div>
                        <Button variant="contained"
                                color="secondary" type="submit" disabled={pristine || submitting}>Submit</Button>
                        <Button variant="contained"
                                color="secondary" type="button" disabled={pristine || submitting} onClick={reset}>Clear
                            Values
                        </Button>
                    </div>
                </Grid>
            </Container>

        </form>
    )
}

export default LoginForm