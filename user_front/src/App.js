import './App.css';
import { useRoutes } from 'react-router-dom';
import Routers from './router';
import "./assets/scss/aanch.scss";

function App() {
  const routes = useRoutes(Routers);
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
