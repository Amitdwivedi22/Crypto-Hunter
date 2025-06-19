import {BrowserRouter, Route} from "react-router-dom";
import  "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { styled } from "@mui/material/styles";

function App() {
  const useStyles= makeStyles(() => {
    App:{

    }

  })
   const classes = useStyles();

  return(
    <BrowserRouter>
     <div>
      <Header />
      <Route path="/" component={HomePage} exact/>
      <Route path="/coin/:id" component={CoinPage} />
     </div>
    </BrowserRouter>
  );
};

export default App
