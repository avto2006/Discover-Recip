
import './App.css';
import NavCss from './Components/Nav.css'
import  Nav from './Components/Nav.jsx'
import Main from './Components/Main.jsx'
import Recips from './Components/Recips.jsx'
import { AddMenu } from './Components/AddMenu.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Recips />
      <AddMenu />

    </div>
  );
}

export default App;

