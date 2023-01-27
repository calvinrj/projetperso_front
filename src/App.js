import {Routes,Route, Form} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Registrer from "./components/Registrer";
import NotFound from "./components/NotFound";
import AllUsers from "./components/AllUsers";
import Profile from "./components/Profile";
import Forma from "./components/Forma";
import "semantic-ui-css/semantic.min.css";
import Avis from "./components/Avis";
import AddVoiture from "./components/AddVoiture";
import AllVoiture from "./components/AllVoiture";
import Voiture from "./components/Voiture";
import ImageUpload from "./components/ImageUpload";


function App() {
  return (
    <div className="App">
  <Routes>
  
    <Route path="/" element={<Home/>} />
    <Route path="/users/:name" element={<Profile/>} />
    <Route path="/registrer" element={<Registrer/>} />
    <Route path="/*" element={<NotFound/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/allusers" element={<AllUsers/>} />
    <Route path="/form" element={<Forma/>} />
    <Route path="/note" element={<Avis/>} />
    <Route path="/addcars" element={<AddVoiture/>} />
    <Route path="/cars" element={<AllVoiture/>} />
    <Route path="/cars/:id" element={<Voiture/>} />
    <Route path="/uploadimage" element={<ImageUpload/>} />
    


  </Routes>
    </div>
  );
}

export default App;
