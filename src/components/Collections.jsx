import { Container, Row, Col, Image } from "react-bootstrap";
import Men from "../assets/Men.png";
import Women from "../assets/Women.png";

function Collections() {
  return (
    <Container fluid className="bg-[#052428] p-10 md:p-20">
      <Container className="border-2 border-white">
        <Row className="p-0">
          <Col
            xs={12}
            md={4}
            className="bg-black flex items-center justify-center"
          >
            <div className="text-center text-white">
              <p className="text-xl md:text-4xl md:font-bold">Men's</p>
              <p className="text-base md:text-2xl">View Collection</p>
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Image src={Men} className="w-100" alt="Men's Clothing" />
          </Col>
        </Row>
        <Row className="p-0 hidden md:flex">
          <Col
            xs={12}
            md={4}
            className="border-r-2 border-white pb-8 pt-8"
          ></Col>
          <Col
            xs={12}
            md={4}
            className="border-r-2 border-white pb-8 pt-8"
          ></Col>
          <Col xs={12} md={4} className="pb-8 pt-8"></Col>
        </Row>

        <Row className="p-0 md:hidden md:flex ">
          <Col
            xs={12}
            md={4}
            className="border-r-2 border-white pb-3 pt-3"
          ></Col>
        </Row>

        <Row className="p-0">
          <Col xs={12} md={8} className="p-0">
            <Image src={Women} className="w-100" alt="Women's Clothing" />
          </Col>
          <Col
            xs={12}
            md={4}
            className="bg-black flex items-center justify-center"
          >
            <div className="text-center text-white">
              <p className="text-xl md:text-4xl md:font-bold">Women's</p>
              <p className="text-base md:text-2xl">View Collection</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Collections;
