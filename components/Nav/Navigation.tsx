import React from 'react'

const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 flex h-10 w-screen justify-between py-5 px-10">
            <div>
                <a className="" href="#home">
                    page 1
                </a>
            </div>
            <div>
                <a className="" href="#home2">
                    page 2
                </a>
            </div>
            <a href="">page 3</a>
            <a href="">page 4</a>
            <a href="">page 5</a>
        </nav>
    )
}
export default Navigation
