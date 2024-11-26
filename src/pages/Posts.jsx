import { Outlet, Link } from "react-router-dom"
import Header from "../components/Header"

export default function Posts() {
    return (
        <>
            <Header>
                <Link to='/' className="nav-item">
                    <p>Home</p>
                </Link>
            </Header>
            <h1>Posts!</h1>
        </>
    )
}