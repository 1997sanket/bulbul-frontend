export const Registration = () => {

    return (
        <main>
            <div className="container">
                <h1>Register</h1>
                <form id="registerForm">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" id="userName" required autofocus />
                    </div>

                    <div className="form-group">
                        <label for="email">Email Id</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" onchange="checkPassword()" className="form-control" id="confirm-password" required />
                    </div>

                    <div>
                        <h3 id="password-error"></h3>
                    </div>
                    <br />
                    <button id="submit-button" onclick="register(event)" type="submit" className="btn btn-primary">Register</button>
                </form>

                <div>
                    <br />
                    <h2 id="response"></h2>
                </div>
            </div>
        </main>
    )
}