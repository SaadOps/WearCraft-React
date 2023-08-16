import { Image, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import heroImage from "../assets/Hero.png";
import { Link } from "react-router-dom";

function CardOnImage() {
  return (
    <div className="relative w-full max-w-full max-h-612px">
      <Image
        src={heroImage}
        style={{ width: "100%", maxWidth: "100%", maxHeight: "612px" }}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Card className="w-72 border-none bg-transparent mx-auto">
          <Card.Body>
            <Card.Title className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl whitespace-nowrap mb-4">
              Discover the new you
            </Card.Title>
            <Link to="/shopnowpage"
              
              className="bg-white hover:bg-black hover:text-white text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl font-bold py-2 px-4 "
            >
              Shop Now
            </Link>
            <Card.Text className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl mt-4 whitespace-nowrap mr-50">
              We know your expectations about clothes
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardOnImage;
