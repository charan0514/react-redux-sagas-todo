import React from 'react';
import Container from './container'
import {ContainerStyled} from './styles';
import isEmpty from 'lodash/isEmpty'

// const {REACT_APP_GOOGLE_SIGNIN_KEY} = process.env;

 class Dashboard extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const {ActionFetchUsers} = this.props
        ActionFetchUsers()
    }

    componentDidUpdate(prevProps, prevState) {
    }


    render () {
        const {isLoading, userList} = this.props
        return (
            <ContainerStyled>
                {isLoading ? <div>Fechting data...</div> : <div>Got Data</div>}
            </ContainerStyled>
        );
    }
}

export default Container(Dashboard)