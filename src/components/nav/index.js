import React from "react"

function NavBar(props) {
    return (
        <header className="header">
            <h1 className="header-name">
                Kauê Pereira
            </h1>
            <nav className="header-nav">
                <ul >
                    <li >
                        <a  href="teste" className="active">
                            Home
                        </a>
                    </li>
                    <li >
                        <a  href="teste">
                            Formação
                        </a>
                    </li>
                    <li >
                        <a  href="teste">
                            Projetos
                        </a>
                    </li>
                    <li >
                        <a  href="teste">
                            Sobre
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-social">
            <ul className="header-social-ul">
                    <li >
                        <a className="fab fa-github" href="teste">

                        </a>
                    </li>
                    <li >
                        <a className="fab fa-linkedin" href="teste">
              
                        </a>
                    </li>
                    <li >
                        <a className="fab fa-youtube" href="teste">
                            
                        </a>
                    </li>
                    <li >
                        <a className="fab fa-telegram" href="teste">
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar