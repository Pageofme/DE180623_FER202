import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function BookForm() {
  return (
    <div
      className="justify-content-center "
      style={{ width: "80%", marginLeft: "10.5%", paddingRight: "0.8%" }}
    >
      <h3 className="text-center mb-4">Book Your Table</h3>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name *"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email *"
            required
          />
        </div>
        <div className="col-md-4">
          <select className="form-select" required>
            <option value="">Select a Service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="5"
          placeholder="Please write your comment"
        ></textarea>
      </div>
      <div className="text-start ">
        <button type="submit" className="btn btn-warning text-white px-4">
          Send Message
        </button>
      </div>
    </div>
  );
}
export default BookForm;
