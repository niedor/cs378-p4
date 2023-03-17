import { useNavigate } from 'react-router-dom'
import Carousel, { CarouselItem } from './Carousel';
import './App.css';

function App( {name} ) {
  let navigate = useNavigate();

  const redirectToBucketList = (title) => {
    console.log("title: " + title);
    navigate(`/cs378-p4/${title}`);
  }

  const signout = () => {
    navigate("/cs378-p4/");
  }

  return (
    <div className="App">
      <div className="sign-out-container">
        <button className="sign-out-button" onClick={signout}>Sign out</button>
      </div>
      <h1 className="greeting">{`Hi, ${name}!`}</h1>
      <p className="bucket-list-header">------------------- Bucket lists -------------------</p>

      <div className="bucket-lists">
        <Carousel>
          <CarouselItem>
            <button className="bucket-list-container" onClick={() => redirectToBucketList("Weekly")}>
              <p className="bucket-list-name bucket-list-name-description">3/13 - 3/19</p>
            </button>
          </CarouselItem>

          <CarouselItem>
            <button className="bucket-list-container" onClick={() => redirectToBucketList("Monthly")}>
              <p className="bucket-list-name bucket-list-name-description">March</p>
          </button>
          </CarouselItem>

          <CarouselItem>
            <button className="bucket-list-container" onClick={() => redirectToBucketList("Yearly")}>
              <p className="bucket-list-name bucket-list-name-description">2023</p>
          </button>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
