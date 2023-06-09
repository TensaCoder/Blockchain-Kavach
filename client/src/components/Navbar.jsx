import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Bitcoin</a>
                            <a class="nav-link" href="#">Ethereum</a>
                            <a class="nav-link" href="#">Others</a>
                            {/* <a class="nav-link disabled">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar