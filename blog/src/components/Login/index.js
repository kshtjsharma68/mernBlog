import React, { Component } from 'react';
import "./style.css";
import { Button, Box } from "react-bulma-components/full";

//This is a class component
export default class Login extends Component {
    //Very first thing to work
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            hasError: false
        };
    }

    changeForm = login => {
        this.setState(prevState =>(
            {...prevState, login}
        ));
    }

    //After constructor
    static getDerivedStateFromProps(props, state) {
        console.log('inside state')
        console.log(state)
        return state;
    }

     //Before render to update
    //  shouldComponentUpdate() {
    //     console.log('should update')
    //     return true;
    // }

    //After render
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('nap')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log(snapShot, 'did update')
    }
    //After snap with last argument as value from getSnapShotBeforeUpdate
    componentDidMount() {
        console.log('did mount')
    }
   
    //
    componentWillUnmount() {
        //immediately after component is unmounted
    }

    //Error handling

    //Very first on error this is called
    static getDerivedStateFromError(error) {
        console.log(`Error occurred and reported: ${error}`)
        return { hasError: true }
    }

    //Final step to encounter and report and handle error in component
    componentDidCatch(error, info) {
        console.error(error, info)
    }
    

    render() {
        let { login, hasError } = this.state;console.log('herere', this.state)
        if (hasError) {
            return (
                <h3>Oop's something went wrong..</h3>
            );
        }

        return (
            <div>
                <Box className="Box" style={{minWidth: '400px'}}>
                    <div className="columns" style={{borderBottom: '1px solid white'}}>
                        <h3 className="column" style={{float: 'left', color: 'white'}}>Blog</h3>
                        <div className="column" style={{float: 'right'}}>
                            <Button color="white" size="small" rounded onClick={e => this.changeForm(false)}>SignUp</Button>&nbsp;
                            <Button color="white" size="small" selected rounded onClick={e => this.changeForm(true)}>Login</Button>
                        </div>
                    </div>
                    {
                        login
                        ?
                        <div>
                            <input className="input login_input" type="text" placeholder="Email Address"></input>
                            <input className="input login_input" type="password" placeholder="********"></input>
                            <Button className="" style={{top: '10px'}} color="success" size="medium"  outlined>Login</Button>
                        </div>
                        :
                        <div>
                            <input className="input login_input" type="text" placeholder="Email Address"></input>
                            <input className="input login_input" type="password" placeholder="********"></input>
                            <Button className="" style={{top: '10px'}} color="success" size="medium"  outlined>SignUp</Button>
                        </div>
                    }
                </Box>
            </div>
        );
    }
}