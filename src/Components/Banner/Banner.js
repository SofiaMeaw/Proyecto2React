import './Banner.css';

const Banner = ({ handlePrevious, handleNext}) => {
  return (
    <section className="container">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://live.staticflickr.com/65535/52245372741_e7bb439ed5_z.jpg"
              className="d-block w-100"
              alt="Agenda"
            />
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span onClick={handlePrevious}
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span onClick={handleNext}
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
