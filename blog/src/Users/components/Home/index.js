import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Partials/header';
import Footer from '../Partials/footer';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state ={
            error: false
        }
    }

    render() {
        return (
            <div>
                <h2>Home page</h2>
            </div>
        )
    }
}

Home.propTypes = {
    
}

const mapStateToProps = state => ({
    loggedIn: state.login.signn
})

const mapDispatchToProps = dispatch => {
    return  {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);