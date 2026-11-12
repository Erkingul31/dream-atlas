function Header() {
    return (
        <header className="header">
            <a href="#home" className="logo">
                ✦ DREAM ATLAS
            </a>

            <nav className="navigation">
                <a href="#home">Главная</a>
                <a href="#places">Красивые места</a>
                <a href="#favorites">Избранное</a>
                <a href="#about">О проекте</a>
            </nav>
        </header>
    );
}

export default Header;