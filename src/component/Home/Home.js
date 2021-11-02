import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import UseHome from "../UseHome/UseHome";
import "./Home.css";

const Home = () => {
  const [home, setHome] = useState([]);
  const { isLoading, setIsLoading } = useAuth();

  useEffect(() => {
    fetch("http://localhost:1000/services")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setHome(data);
      });
  }, [setIsLoading]);
  if (isLoading) {
    return (
      <div className="text-center spiner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    );
  }
  return (
    <div>
      <h1 className="wellcome">
        WELLCOME TO THE <br /> MIDTOWN HOTEL
      </h1>
      <img
        className="img-fluid"
        src="https://image-tc.galaxy.tf/wijpeg-a1b96lgvp6vvmankkwbnhbqjw/file.jpg?width=1920"
        alt=""
      />
      {/* fill comfort area */}
      <div className="fill-comfort">
        <h1 className="comfort">Excitement Meets Comfort and Luxury</h1>
        <div className="row fill-comfort-para">
          <div className="col-lg-6">
            <p>
              Henn na Hotel New York offers guests an exquisite choice of
              Executive King Room, Double Room, Suite or King Accessible Room.
              Unique and impressive amenities include televisions with streaming
              capabilities from your personal device and viewing subscriptions,
              luxury Kassatex linen and robes, C.O. Bigelow bath amenities, safe
              and refrigerator. Executive Rooms and Suites also feature LG
              Styler Closets – a unique convenience that steams and refreshes
              clothing, minimizing the need for dry cleaning. Suites also
              include deep soaking tubs and private balcony.
            </p>
            <ol className="order-lists">
              <li>Free high-speed WIFI</li>
              <li>Air Conditioning</li>
              <li>Mini Bar </li>
              <li>Hair Dryer </li>
              <li> 42-inch flat screen TV</li>
              <li>Mineral water</li>
              <li>Mineral water</li>
              <li>Tea & coffee refreshment tray </li>
              <li>Spacious well-lit work spaces </li>
              <li>Ensuite with complimentary toiletries </li>
              <li>Robe & slippers </li>
              <li>Complimentary Newspaper </li>
              <li> Coffee machine </li>
            </ol>
          </div>
          <div className="col-lg-6">
            <img
              className="image-daining"
              src="https://image-tc.galaxy.tf/wijpeg-7lv98yctdpjvfrdx1lqwlixr9/file.jpg?width=860"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* fill comport area */}

      <div>
        <h2 className="rooms-featured">Featured Rooms</h2>
        <div className="home-container">
          {home.map((room) => (
            <UseHome key={room._id} room={room}></UseHome>
          ))}
        </div>
      </div>
      {/* park and daining area */}
      <div className="dinner-div">
        <div className="row">
          <h1 className="midtown">Enjoy your drink</h1>
          <div className="col-lg-3">
            <div className="facilities"></div>
          </div>
        </div>
      </div>
      <div className="facilities-div">
        <div className="row">
          <h1 className="midtown">WELLCOME TO THE MIDTOWN HOTEL PARK</h1>
          <div className="col-lg-3">
            <div className="facilities">
              <h2 className="warning">
                enter inside by this road and enjoy scenery of this park{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* park and daining area  end*/}

      <div className="row">
        <div className="col-md-6">
          <h4 className="p-4">SUPERIOR SUITE</h4>
          <p>
            Located on the top floor, the spacious Superior Suite offer comfort,
            style, and luxury. The King bedroom with Simmons Beauty Plush king
            bed is separated from the living room featuring a pull out sofa
            sleeper and private balcony. Each room features WiFi, 2 TV's with
            streaming capabilities, USB and International outlets, luxury
            Kassatex linen, robes and slippers, safe, refrigerator, and LG
            Styler Steam Closet that will steam, clean, and eliminate bacteria
            from your garments. The Suite's bathroom offer elevated C.O. Bigelow
            luxury amenity kits, deep soaking tubs and TOTO Washlet Electronic
            Bidet
          </p>
        </div>
        <div className="col-md-6">
          {" "}
          <img
            className="img-fluid"
            src="https://image-tc.galaxy.tf/wijpeg-3ecepaxj6sdt8gchzqzmle9dl/wide.jpg?crop=0%2C104%2C2000%2C1125&width=555"
            alt=""
          />{" "}
        </div>
      </div>

      {/*  <div className="row">
        <div className="col-lg-6">
          <img
            src="https://image-tc.galaxy.tf/wijpeg-b300k0q1i6e1ztamnz33ozruh/file.jpg?width=1920"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <h1>FOOD AND DRINK</h1>
          <p>(Comming Soon)</p>
          <p>
            The Henn na Hotel New York will feature a full-service restaurant
            providing high-quality all-day dining. Acclaimed, authentic, and
            savory cuisine experience coming soon!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
