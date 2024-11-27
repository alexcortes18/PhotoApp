import { Outlet, Link } from "react-router-dom"
import Header from "../components/Header"

// for now this data will only be locally. I need to make it better with http.
import { imageData } from "../util/posts"
import PostItem from "../components/PostItem"

export default function Posts() {
    return (
        <>
            <Outlet></Outlet>
            <Header>
                <Link to='/' className="nav-item">
                    <p>Home</p>
                </Link>
            </Header>

            {/* Here posts: */}
            <div className="posts-list-container">
                <ul className="posts-list">
                    {imageData.map(post => (
                        <li key={post.id}>
                            <PostItem imgData={post}></PostItem>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}