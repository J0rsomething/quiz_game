import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Introduction from './component/introduction/introduction'
import QuestionContainer from './container/question_container/question_container'
import Result from './component/result/result'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Introduction} />
          <Route path='/question' component={QuestionContainer} />
          <Route path='/result' component={Result} />
          <Redirect to='/'></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
