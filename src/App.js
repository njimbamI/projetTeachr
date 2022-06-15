
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nospropositions from "./pages/Nospropositions";
import Paiement from "./pages/Paiement";
import Votredemande from "./pages/Votredemande";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Votredemande />}/>
        <Route path='Nos propositions' element={<Nospropositions />}/>
        <Route path='Paiement' element={<Paiement />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
