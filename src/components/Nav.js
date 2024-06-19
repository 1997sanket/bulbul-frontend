
export const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img src={`${process.env.PUBLIC_URL}/images/favicon.png`} alt="Chirper logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li id="register-link" className="nav-item">
                                <a className="nav-link" href="registration.html">Registration</a>
                            </li>
                            <li id="login-link" className="nav-item">
                                <a className="nav-link" href="login.html">Login</a>
                            </li>
                            <li id="chirp-link" className="nav-item">
                                <a className="nav-link" href="peep.html">Peep Here</a>
                            </li>
                            <li id="logout-link" className="nav-item">
                                <a className="nav-link" onclick="logout()" href="">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}