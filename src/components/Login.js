export const Login = () => {
    return (
        <main>
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label for="userName">Username</label>
                        <input type="text" className="form-control" id="userName" required autofocus />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" className="form-control" name="password" required />
                    </div>
                    <br />
                    <button type="submit" onclick="login(event)" className="btn btn-primary">Login</button>
                </form>

                <div>
                    <h3 id="error-message"></h3>
                </div>
            </div>
        </main>
    )
}