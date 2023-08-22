const Navbar = () => {
    return (
        <nav className="navigation container">
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
