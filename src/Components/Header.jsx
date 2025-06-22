import "../css/Header.css"

const Header = () => {
    return (<>
        <header>
            <a href="/Home"><img src="https://img.icons8.com/?size=100&id=hXQVOG_zPMn1&format=png&color=000000" alt="" id="imgg"/></a>
           <div  id="navs">
            <a href="/Demos">Demos</a>
            <a href="/Sobre">Sobre</a>
            <a href="#">Downloads</a>
            <div id="searchid">
            <input type="search" name="" id="" placeholder="pesquisar..."/>
            <img src="https://img.icons8.com/?size=100&id=85796&format=png&color=000000" alt="" />
            </div>
            <button>Login</button>
           </div>

            
        </header>

    </>)
}

export default Header;