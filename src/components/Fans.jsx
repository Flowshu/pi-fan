import { Button, Col, Row } from 'arwes';
import { useState } from 'react';

const Fans = () => {

  const [fans, setFans] = useState([
    {
      id: 1,
      speed: 1100,
    },
    {
      id: 2,
      speed: 1200,
    },
    {
      id: 3,
      speed: 1300,
    },
    {
      id: 4,
      speed: 1400,
    },
    {
      id: 5,
      speed: 1500,
    },
    {
      id: 6,
      speed: 1600,
    }
  ]);
  
  const increaseSpeed = (fanId) => { 
    const newFans = fans.map((fan) => {
      if (fan.id === fanId) {
        fan.speed += 100;
      }
      return fan;
    });
    setFans(newFans);
  };
  
  const decreaseSpeed = (fanId) => {
    const newFans = fans.map((fan) => {
      if (fan.id === fanId) {
        fan.speed -= 100;
      }
      return fan;
    });
    setFans(newFans);
  };

  const setAll = (speed) => {
    const newFans = fans.map((fan) => {
      fan.speed = speed;
      return fan;
    });
    setFans(newFans);
  }

  return (
    <div>
      <h1>Fans</h1>
      {fans.map((fan) => {
        return (
          <Row>
            <Col>Fan #{fan.id}</Col>
            <Col><Button layer='secondary' onClick={() => decreaseSpeed(fan.id)}>-</Button></Col>
            <Col><Button layer='primary' onClick={() => increaseSpeed(fan.id)}>+</Button></Col>
            <Col>{fan.speed} RPM</Col>
          </Row>
        );
      })}
      <Button layer='primary' onClick={() => setAll(0)}>Turn off!</Button>
      <Button layer='primary' onClick={() => setAll(500)}>500 RPM</Button>
      <Button layer='primary' onClick={() => setAll(1000)}>1000 RPM</Button>
    </div>
  );
}

export default Fans;
