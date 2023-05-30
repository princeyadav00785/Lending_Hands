import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <div className="caraousel">
        <MDBCarouselItem
          className="w-100 d-block  "
          itemId={1}
          src={img2}
          alt="..."
        >
          {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={img3}
          alt="..."
        >
          {/* <h5>Second slide label</h5> */}
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={img1}
          alt="..."
        >
          {/* <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </MDBCarouselItem>
      </div>
    </MDBCarousel>
  );
}
