import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import ForstaSida from './Sidor/ForstaSida/ForstaSida';
import ProjektSida from './Sidor/ProjektSida/ProjektSida';
import { Transition } from 'react-transition-group'
import Backdrop from './Components/Navigation/Backdrop/Backdrop';
import Meny from './Components/Navigation/Meny/Meny'; 

//Har anvander jag state och menyVisas true for att visa min meny och null om den ar false, jag anvander sen setState i mina tva funktioner som jag med onclick vaxlar mellan att visa menyn
//Jag valjer ocksa mellan att visa min backdrop nar menyn ar framme eller null nar den ar false 
//Jag anvander router, route och switch ifran react-router-dom for att hantera min navigation och exact path for att minska felladdnignarna, aven om dom fortfarande hander.

class App extends Component {
  state = {
    menyVisas: false,
  }

  visaMeny = () => {
    this.setState({menyVisas: true}); 
  }

  stangMeny = () => {
    this.setState({menyVisas: false}); 
  }

  render() {

 

  return (
    <div className="App">
    <Router
    >
    {this.state.menyVisas ? ( null ) : <button className="Knapp" onClick={this.visaMeny}>Öppna Menyn</button>  }
  
      
    <Switch>
      <Route exact path="/" component={ForstaSida}></Route>
      <Route exact path="/projekt" component={ProjektSida}></Route>
    </Switch>

    <Transition 
        mountOnEnter
        unmountOnExit
        in={this.state.menyVisas} timeout={100}>
          {
            <Meny closed={this.stangMeny}/>

          }
        </Transition>
        {this.state.menyVisas ? ( <Backdrop show />) : null}

    </Router>
    </div>
  
  );
}
}


export default App;
