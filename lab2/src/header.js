import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div style={{ padding: "1% 10%" }}>
      <nav class="navbar navbar-expand-lg mx-5">
        <div class="container-fluid">
          <a class="navbar-brand text-white fw-bolder" href="#">
            <h3>Pizza House</h3>
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <b>
                  <a
                    class="nav-link active text-white fw-bolder"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </b>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-white fw-lighter" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-lighter" href="#">
                  Contacts
                </a>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input
                class="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn bg-danger" type="submit">
                <i className="bi bi-search text-white"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
