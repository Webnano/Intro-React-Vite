
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark text-white bg-green">
            <div class="container">
                <a class="navbar-brand ms-2" href="#"><img src="/public/img/pizzamia.png" alt="pizza" class="pizza" /></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="container-fluid justify-content-start">
                        <div class="navbar-nav ms-auto ps-2">
                            <button class="btn btn-outline-light me-2" type="button"><i class="fa-solid fa-house"></i> Home</button>
                            <button class="btn btn-outline-light me-2" type="button"><i class="fa-solid fa-lock"></i> Login</button>
                            <button class="btn btn-outline-light me-2" type="button"><i class="fa-solid fa-registered"></i> Register</button>
                        </div>
                    </form>

                    <div class="navbar-nav ms-auto ps-2">
                        <button  class="btn btn-outline-primary me-2" type="button"><i class="fa-solid fa-cart-shopping"></i> Total:$25.000</button>
                    </div>
                </div>
            </div>   
      </nav>
    )
}   

export default Navbar;