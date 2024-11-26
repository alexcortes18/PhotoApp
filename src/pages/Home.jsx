import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Home() {
    return (
        <>
            <Header>
                <Link to='/posts' className="nav-item">
                    <p>All Posts</p>
                </Link>
            </Header>
            <h1>Home Page!</h1>
        </>
    )
}