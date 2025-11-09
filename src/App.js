
import './App.css';
import NavCss from './Components/Nav/Nav.css'
import  Nav from './Components/Nav/Nav.jsx'
import Main from './Components/Main/Main.jsx'
import Recips from './Components/Recips/Recips.jsx'
import { AddMenu } from './Components/AddMenu/AddMenu.jsx';

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

