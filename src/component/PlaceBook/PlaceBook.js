import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PlaceBook.css";

const PlaceBook = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [booking, setBooking] = useState({});

  const nameRef = useRef();
  const emailRef = useRef();
  const placeNameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const statusRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    const uri = `http://localhost:1000/services/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id]);

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const placeName = placeNameRef.current.value;
    const placeDescriptions = descRef.current.value;
    const placePrice = priceRef.current.value;
    const placeImg = imgRef.current.value;
    const status = statusRef.current.value;
    const addres = addressRef.current.value;
    const phone = phoneRef.current.value;

    const saveBooking = {
      name,
      email,
      placeName,
      placeDescriptions,
      placePrice,
      placeImg,
      status,
      addres,
      phone,
    };
    // console.log(saveBooking);
    const uri = "http://localhost:1000/placebook";
    fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("place booking successfull");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="confirm-booking-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={placeNameRef}
          placeholder="Place Name"
          value={booking?.name || ""}
          readOnly
        />
        <textarea
          type="text"
          ref={descRef}
          placeholder="description"
          value={booking?.description || ""}
          readOnly
        />
        <input
          type="number"
          ref={priceRef}
          placeholder="Price"
          value={booking?.price || ""}
          readOnly
        />
        <input
          placeholder="Image Url"
          ref={imgRef}
          value={booking?.img || ""}
          readOnly
        />
        <input
          type="text"
          ref={nameRef}
          placeholder="User Name"
          value={user?.displayName || ""}
          readOnly
        />
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          value={user?.email || ""}
          readOnly
        />
        <input type="text" ref={addressRef} placeholder="Address" required />
        <input type="number" ref={phoneRef} placeholder="phone" required />
        <input
          type="text"
          ref={statusRef}
          value="pending"
          className="disableinput"
          readOnly
        />
        <input
          type="submit"
          value="confirm booking"
          className="confirmbutton"
        />
      </form>
    </div>
  );
};

export default PlaceBook;
