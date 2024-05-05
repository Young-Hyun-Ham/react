import React from 'react';
import { Card } from 'react-bootstrap';
import './MainContent.css'; // Import custom CSS for styling

function MainContent() {
  return (
    <div className="main-content">

      <div className='best-sellers'>
        <h2>베스트 상품</h2>
        <div className="card-container">
          {/* 1 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 2 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 3 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 4 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br/>

      <div className='today-best-sellers'>
        <h2>오늘 많이 본 상품</h2>
        <div className="card-container">
          {/* 1 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 2 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 3 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 4 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br/>      

      <div className='new-sellers'>
        <h2>신상품</h2>
        <div className="card-container">
          {/* 1 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 2 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 3 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
          {/* 4 sample card */}
          <Card className="card">
            <Card.Img variant="top" src="path_to_image" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>Description of the product goes here.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  );
}

export default MainContent;
