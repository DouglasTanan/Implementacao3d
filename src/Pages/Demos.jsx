import "../css/Demos.css"
import Cards_demos from "../Components/Cards_demo"
import img_render from "../assets/img/render_img.png"
import Teclass from "../assets/img/Teclass.png"
import robot22 from "../assets/img/robot2.png"
import Background_demos from "../Components/background_demos"
import Game from "../assets/img/Game.png"
const Demos = () => {
  return (<>
    <div>


      <Background_demos />
      <div id="square">

        <Cards_demos img={img_render} title={"Animação Render"} link={"/Render"} />
        <Cards_demos img={Teclass} title={"Teclas 3D"} link={"/Teclas"} />
        <Cards_demos img={robot22} title={"Robo 3D"} link={"/WhiteRobot"} />
        <Cards_demos img={Game} title={"Game"} link={"/Game"} />


      </div>
    </div>
  </>)
}
export default Demos;