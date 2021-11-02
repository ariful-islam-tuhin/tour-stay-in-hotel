import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ManAllOrder.css";

const ManAllOrder = () => {
  const [manageeBooking, setManageeBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/manageallorder")
      .then((res) => res.json())
      .then((data) => setManageeBooking(data));
  }, [manageeBooking]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, you want to delete!!!");
    if (proceed) {
      fetch(`http://localhost:1000/mybooking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingBooking = manageeBooking?.filter(
              (deletebooking) => deletebooking._id !== id
            );
            setManageeBooking(remainingBooking);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    const updatestatus = manageeBooking.find((update) => update?._id === id);
    updatestatus.status = "approved";

    const uri = `http://localhost:1000/mybooking/${id}`;
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");
        }
      });
  };
  return (
    <Container className="py-5">
      <Row xs={1} md={3} className="g-4">
        {manageeBooking.map((order) => (
          <Col key={order?._id}>
            <Card>
              <Card.Img
                variant="top"
                src={order?.placeImg}
                className="card-img"
              />
              <Card.Body>
                <Card.Title>{order?.placeName}</Card.Title>
                <Card.Text>{order?.placeDescriptions.slice(0, 50)}</Card.Text>
                <p>{order?.addres}</p>
                <p>{order?.phone}</p>
                <p>${order?.placePrice}</p>
                <p>status: {order?.status}</p>
                <button
                  className="delet-btn me-3"
                  onClick={() => handleDelete(order?._id)}
                >
                  delete
                </button>
                <button
                  className="delet-btn"
                  onClick={() => handleUpdate(order?._id)}
                >
                  {order?.status}
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ManAllOrder;
