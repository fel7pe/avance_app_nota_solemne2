import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route 
}from "react-router-dom";
import InicioSesion from "./paginas/InicioSesion";
import Registrarse from "./paginas/Registrarse";
import Principal from './paginas/Pricinpal';

function App() {
  return (
    <Router>
      <Switch> 
      <Route path= "/Principal">
      <Principal/>
      </Route>
        <Route exact path="/">  
          <InicioSesion />
        </Route>
        <Route path="/Registrarse" > 
          <Registrarse />   
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
