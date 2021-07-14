import React from 'react'
import {Field, FormErrors, InjectedFormProps, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import {Box, Button, Checkbox, Container, FormControlLabel, Grid} from "@material-ui/core";
import {logInAuthor} from "../../Redux/authorReduser";
import {formDataType, getProfileUserType} from "../../Api/api";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router";

export type IUser = {
    email: string
    password: string
    rememberMe: boolean
}

const validate = (values: IUser) => {
    const errors:FormErrors<IUser>={}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less'
    }
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}

    />
)

const renderCheckbox = ({ input, label }) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)


class LoginForm extends React.Component<InjectedFormProps<IUser> & PropsType> {
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props

        if(this.props.isLog){
            return <Redirect to={'/profile'}/>
        }

        return (
            <form onSubmit={handleSubmit((data)=>this.props.logInAuthor(data))}>
                <Container>
                    <Grid container item xs={8} spacing={1}>
                        <Field name="email" component={renderTextField} label="Email"/>
                    </Grid>
                    <Grid container item xs={8} spacing={1}>
                    <div>
                        <Field name="password" component={renderTextField} type='password' label="password"/>
                    </div>
                    </Grid>
                    <Grid container item xs={8} spacing={1}>
                    <div>
                        <Field name="rememberMe" label="rememberMe"  component={renderCheckbox} />
                    </div>
                </Grid>
                    <Grid container item xs={8} spacing={1}>
                    <div>
                        <Button variant="contained"
                                color="secondary" type="submit" disabled={pristine || submitting}>Submit</Button>
                        <Button variant="contained"
                                color="secondary" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
                        </Button>
                    </div>
            </Grid>
                </Container>

            </form>
        )
    }
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        statusAuthor: state.profilePage.statusAuthor,
        isLog: state.author.isLog
    }
}
const LoginForms = connect(mapStateToProps, {logInAuthor})(LoginForm)


export default reduxForm<IUser>({
    // a unique name for the form
    form: 'LoginForm',
    validate
})(LoginForms)



type MapStateToPropsType = {
    statusAuthor: string
    isLog: boolean
}
type MapDispatchToPropsType = {
    logInAuthor: (values: formDataType) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType