import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <center>
    <div className="w-50">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/arm_row.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Start your fitness journey today!</h3>
          <p>Allow us to help you to reach your goals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/cardio.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Keep on the move!</h3>
          <p>Remember only the weak ignore leg day.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/gym.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
    <Button href="./create-routine" className="p-5 m-5" size="lg" variant="secondary">Create your Routine</Button>
    </div>
    </center>
  );
}

export default Home;