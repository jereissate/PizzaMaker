import { useState } from "react";

import "./App.css";
// import { Header } from "./componentes/Header";
// import { ImgClient } from "./componentes/ImgClient";
// import { OpcoesMassa } from "./componentes/OpcoesMassa";
// import { OpcoesMolho } from "./componentes/OpcoesMolho";
// import { OpcoesTipo } from "./componentes/OpcoesTipo";
import { PizzaScreen } from "./componentes/PizzaScreen";

const initState = { 
  borda: "fina", 
  molho: "amarelo", 
  tipo: ["verdura", "carne"] 
};

function App() {
  const [state, _setState] = useState(initState);

  // setState({ borda: "", molho: "", tipo: [] }); //certa

  return (
    <>
      {/* <div id="screenMaker">
        <Header />

        <div className="row">
          <OpcoesMassa />
          <OpcoesMolho />
        </div>
        <div className="row">
          <OpcoesTipo />
          <ImgClient />
        </div>
        <footer>
          <button className="hidden"> ➡️ </button>
        </footer>
      </div> */}

      <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />
    </>
  );
}

export default App;
