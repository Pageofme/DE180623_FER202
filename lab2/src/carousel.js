import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../pizza1.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../pizza2.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../pizza3.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../pizza4.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../pizza5.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function Carousel() {
//   const slides = [
//     {
//       imgSrc: "../pizza1.jpg",
//       alt: "Neapolitan Pizza",
//       title: "Neapolitan Pizza",
//       description:
//         "If you are looking for a traditional Italian pizza, the Neapolitan is the best option!",
//     },
//     {
//       imgSrc: "../pizza2.jpg",
//       alt: "Second slide",
//       title: "Second slide label",
//       description:
//         "Some representative placeholder content for the second slide.",
//     },
//     // ... các slide khác
//     {
//       imgSrc: "../pizza3.jpg",
//       alt: "Third slide",
//       title: "Third slide label",
//       description:
//         "Some representative placeholder content for the second slide.",
//     },
//     {
//       imgSrc: "../pizza4.jpg",
//       alt: "Fouth slide",
//       title: "Fouth slide label",
//       description:
//         "Some representative placeholder content for the second slide.",
//     },
//   ];

//   return (
//     <div id="carouselExampleCaptions" className="carousel slide">
//       {/* Indicators */}
//       <div className="carousel-indicators">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to={idx}
//             className={idx === 0 ? "active" : ""}
//             aria-current={idx === 0 ? "true" : undefined}
//             aria-label={`Slide ${idx + 1}`}
//           />
//         ))}
//       </div>

//       {/* Slides */}
//       <div className="carousel-inner">
//         {slides.map(({ imgSrc, alt, title, description }, idx) => (
//           <div
//             key={idx}
//             className={`carousel-item ${idx === 0 ? "active" : ""}`}
//           >
//             <img src={imgSrc} className="d-block w-100" alt={alt || "..."} />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>{title}</h5>
//               <p>{description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>

//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

// export default Carousel;
