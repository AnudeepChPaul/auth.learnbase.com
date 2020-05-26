import React, {useEffect} from 'react'
import { withRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Router from 'next/router'

function Index () {
  useEffect(() => {
    Router.push('/login')
    return () => {
    };
  }, []);

  return (
    <Container fluid>
      <div className='spinner-wrapper'>
        <Spinner animation="grow" variant="primary"/>
      </div>
    </Container>
  )
}

export default withRouter(Index)
