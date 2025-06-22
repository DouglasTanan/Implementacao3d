import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RenderColor from "../Pages/RenderColor.jsx"
import Home from "../Pages/Home"
import Sobre from "../Pages/Sobre.jsx"
import Demos from "../Pages/Demos.jsx"
import Teclas from "../Pages/Teclas.jsx"
import Robot2 from "../Pages/Robot2.jsx"
import Game from "../Pages/Game.jsx"
const AppRoute = () =>{
    return(<>
    <Router>
    <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Render"  element={<RenderColor/>}/>
        <Route path="/Sobre"  element={<Sobre/>}/>
        <Route path="/Demos"  element={<Demos/>}/>
        <Route path="/Teclas"  element={<Teclas/>}/>
        <Route path="/WhiteRobot"  element={<Robot2/>}/>
        <Route path="/Game"  element={<Game/>}/>
    </Routes>
</Router>
    </>)
}
export default AppRoute;
