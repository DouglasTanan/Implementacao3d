import "../css/Cards_demo.css"
const Cards_demos = ({img,title,link}) =>{
    return(<>
   <a href={link} id="Card_main">
      <img src={img} alt="" />
      <h1>{title}</h1>
   </a>
    </>)
}
export default Cards_demos;