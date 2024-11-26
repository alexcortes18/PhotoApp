import { Link } from "react-router-dom";

export default function PostItem({ imgData }) {
    const formattedDate = new Date(imgData.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
    return (
        <div className="post-item">
            <img src={`../../src/assets/${imgData.path}`}></img>
            <div className="post-item-content">
                <div>
                    <h2>{imgData.name}</h2>
                    <p className="post-item-date">{formattedDate}</p>
                </div>
                <p>
                    {/* For now just to go Home */}
                    <Link to="/" className="post-button">Go to Post</Link>
                </p>
            </div>

        </div>
    );
}