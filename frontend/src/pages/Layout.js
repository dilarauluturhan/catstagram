import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
    const navigate = useNavigate();
    const checkLogin = () => {
        let token = localStorage.getItem("token");
        if (token == null) {
            navigate("/login");
        }
    }

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }

    useEffect(() => {
        checkLogin();
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ms-5">
                    <img src="https://picsum.photos/id/40/25/25" className="rounded-circle" />
                    <Link to="/" className="navbar-brand ms-2 fw-bolder">Catstagram</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" aria-current="page" href="#">Homepage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" href="#">Discover</a>
                            </li>
                        </ul>
                        <form className="container-fluid">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                <a onClick={logout} className="btn btn-outline-secondary fw-semibold me-5">Log out</a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;