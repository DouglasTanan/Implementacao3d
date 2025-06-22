import "../css/Home.css"
import Robot from "../Components/Robot3d"
import SplineLogo from "../assets/img/spline logo (1).png"
import WebGl from "../assets/img/Webgl.png"
const Home = () => {
    return (<>
        <div>
         <div id="imgs_credito">
             <img src={WebGl} alt=""  height={"44px"}/>
            <img src={SplineLogo} alt="" height={"44px"}/>
           
         </div>
        <Robot/>
        
        </div>

    </>)
}

export default Home;