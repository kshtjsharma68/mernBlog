import React, { Component } from 'react';
import "./style.css";
import { Button, Box, Container } from "react-bulma-components/full";
import {connect} from 'react-redux';
import { loginIn, registerUser } from './actions';

//This is a class component
class Login extends Component {
    //Very first thing to work
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            hasError: false,
            title: 'Login',
            form: {
                email : '',
                password: ''
            },
            register: {
                username: '',
                email: '',
                password: '',
                cpassword: '',
            }
        };
    }

    changeForm = (login, title) => {
        this.setState(prevState =>(
            {...prevState, login, title}
        ));
    }

    //After constructor
    // static getDerivedStateFromProps(props, state) {
    //     console.log('inside state')
    //     console.log(state)
    //     return state;
    // }

    //  //Before render to update
    // //  shouldComponentUpdate() {
    // //     console.log('should update')
    // //     return true;
    // // }

    // //After render
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('nap')
    //     return null;
    // }

    // componentDidUpdate(prevProps, prevState, snapShot) {
    //     console.log(snapShot, 'did update')
    // }
    // //After snap with last argument as value from getSnapShotBeforeUpdate
    // componentDidMount() {
    //     console.log('did mount')
    // }
   
    // //
    // componentWillUnmount() {
    //     //immediately after component is unmounted
    // }

    // //Error handling

    // //Very first on error this is called
    // static getDerivedStateFromError(error) {
    //     console.log(`Error occurred and reported: ${error}`)
    //     return { hasError: true }
    // }

    // //Final step to encounter and report and handle error in component
    // componentDidCatch(error, info) {
    //     console.error(error, info)
    // }

    handleLoginInuput = e => {
        let { name, value } = e.target;
        let { form }        = this.state; 
        this.setState(prevState => ({
            ...prevState,
            form: {
                ...form,
                [name]: value
            }
        }));
    }

    handleRegisterInputs = e => {
        let { name, value } = e.target;
        let { register }    = this.state;
        this.setState(prevState => ({
            ...prevState,
            register: {
                ...register,
                [name]: value
            }
        }));
    }

    submitLogin = _ => {
        let { form, login } = this.state
        const { signIn } = this.props
        signIn(form)
    }

     submitRegister = _ => {
        let { register, login } = this.state
        const { registerUser } = this.props
            registerUser(register)
    }
    

    render() {
        let { login, hasError, form, register, title } = this.state;
        if (hasError) {
            return (
                <h3>Oop's something went wrong..</h3>
            );
        }

        return (
                <div className="App">
                    <Container fluid style={{maxWidth: '600px'}}>
                        <Box className="Box" style={{minWidth: '400px'}}>
                            <div className="columns" style={{borderBottom: '1px solid white'}}>
                                <h3 className="column" style={{float: 'left', color: 'white'}}>{title}</h3>
                                <div className="column" style={{float: 'right'}}>
                                    <Button className={login ? "selected" : ""} color="white" size="small" rounded onClick={e => this.changeForm(false, 'Registration')}>SignUp</Button>&nbsp; 
                                    <Button className={!login ? "selected" : ""} color="white" size="small" rounded onClick={e => this.changeForm(true, 'Blog')}>Login</Button>
                                </div>
                            </div>
                            {
                                login
                                ?
                                <div>
                                    <input className="input login_input" name="email" type="text" value={form.email} placeholder="Email Address" onChange={e => this.handleLoginInuput(e)}></input>
                                    <input className="input login_input" type="password" name="password" value={form.password} onChange={e => this.handleLoginInuput(e)} placeholder="********"></input>
                                    <Button className="" style={{top: '10px'}} color="success" size="medium" onClick={() => this.submitLogin()}  outlined>Login</Button>
                                </div>
                                :
                                <div>
                                    <input className="input login_input" type="email" name="email" onChange={e => this.handleRegisterInputs(e)} value={register.email} placeholder="Email Address"></input>

                                    <input className="input login_input" type="text" value={register.username} name="username" onChange={e => this.handleRegisterInputs(e)} placeholder="Username"></input>
                                    <input className="input login_input" type="password" name="password" onChange={e => this.handleRegisterInputs(e)} value={register.password} placeholder="********"></input>

                                    <input className="input login_input" type="password" name="cpassword" onChange={e => this.handleRegisterInputs(e)} value={register.cpassword} placeholder="********"></input>

                                    <Button className="" style={{top: '10px'}} color="success" size="medium" onClick={() => this.submitRegister()} outlined>SignUp</Button>
                                </div>
                            }
                        </Box>
                    </Container>    
                </div>  
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.login.signin
})

const mapDispatchToProps = dispatch => {
    return {
        signIn: payload => {
            dispatch(loginIn(payload))
        },
        registerUser: payload => {
            dispatch(registerUser(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);