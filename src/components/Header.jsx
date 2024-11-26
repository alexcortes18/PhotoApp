export default function Header({ children }) {
    return (
        <div className="header-container">
            <h1>PhotoAPP!</h1>
            <nav className="header-children">
                {children}
            </nav>
        </div>
    );
}