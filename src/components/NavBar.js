function NavBar({ currentPage, handlePageChange }) {
    return (
        <>
        <header>
            <h1>Sheri Elgin</h1>
            <nav>
                <ul>
                    <li><a onClick={() => handlePageChange("AboutMe")} >About Me</a></li>
                    <li><a onClick={() => handlePageChange("Portfolio")}>Work</a></li>
                    <li><a onClick={() => handlePageChange("Contact")}>Contact Me</a></li>
                    <li><a href="/aboutme-react/assets/selginresume2020.pdf" >Resume</a></li> 
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar;