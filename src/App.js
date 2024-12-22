import './App.css';

import Header from './Comps/Header';
import Projetos from './Comps/Projetos';
import Redes from './Comps/Redes';
import Skills from './Comps/Skills';
import Welcome from './Comps/Welcome';

function App() {
  return (
    <>
    <Header />
    <Welcome />
    <Skills />
    <Projetos />
    <Redes />
    </>
  );
}

export default App;
