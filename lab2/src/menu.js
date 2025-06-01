import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./menu.css";
function Menu() {
  return (
    <div>
      <h2 className="text-start mt-5" style={{ marginLeft: "10.5%" }}>
        Our Menu
      </h2>
      <div className="row justify-content-center gap-3 mb-5">
        <div
          className="card text-start position-relative col-md-3 g-0"
          // style={{ width: "18rem" }}
        >
          {/* Thanh vàng góc trái */}
          <div className="corner-ribbon bg-warning position-absolute text-black fw-bold px-2">
            SALE
          </div>

          <img src="./menu1.jpg" className="card-img-top" alt="Pizza" />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <p className="card-text">
              <del>$40.00</del>
              <span className="text-warning ">
                <strong>$24.00</strong>
              </span>
            </p>
            <div className="d-grid">
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>

        <div className="card col-md-3 text-start g-0">
          <img src="./menu2.jpg" className="card-img-top" alt="Pizza" />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <p className="card-text">
              <span>$25.00</span>
            </p>
            <div className="d-grid">
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>

        <div className="card position-relative col-md-3 text-start g-0">
          {/* Thanh vàng góc trái */}
          <div className="corner-ribbon bg-warning position-absolute text-black fw-bold px-2">
            NEW
          </div>

          <img src="./menu3.jpg" className="card-img-top" alt="Pizza" />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <p className="card-text">
              <span>$30.00</span>
            </p>
            <div className="d-grid">
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>

        <div className="card position-relative col-md-3 text-start g-0">
          {/* Thanh vàng góc trái */}
          <div className="corner-ribbon bg-warning position-absolute text-black fw-bold px-2 ">
            SALE
          </div>

          <img src="./menu4.jpg" className="card-img-top" alt="Pizza" />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <p className="card-text">
              <del>$50.00</del>
              <span className="text-warning ">
                <strong>$30.00</strong>
              </span>
            </p>
            <div className="d-grid">
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
