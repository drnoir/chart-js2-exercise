import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import {Col, Row, Jumbotron, Button } from 'reactstrap';

//add your data for charts here
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

function App() {
  return (
    <div className="Container-fluid ">
     <Row className="m-4">
       <Col>
      <h2 className="text-center">React Chart JS 2 One Page Exercise App</h2>
      <Jumbotron> 
   
        <hr className="my-2" />
        <h3>Instructions</h3>
        <p>Create one of each kind of chart avaliable in the React Chart Js package, the first one is done for you - Doughnut   </p>
        <p>Refer to <a href ="https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components">The React Chart JS examples</a> or the src/examples folder for examples of each type to create one of 
          each of the chart types listed below.
        </p>
      </Jumbotron>
      </Col>
      </Row> 
    <Row className="chart-container m-4 p-4">
      <Col>
      <h5  className="text-center">Create a Doughnut</h5>
      <Doughnut data={data} />
      </Col>
      <Col>     
      <h5    className="text-center">Create a BarChart</h5>
      {/* create a bar chart here */}
      </Col> 
      <Col>     
      <h5  className="text-center">Create a Pie Chart</h5>
        {/* create a pie chart here */}
      </Col> 
    </Row>

    <Row  className="chart-container m-4 p-4">

    <Col>
    <h5   className="text-center">Create a Line Chart</h5>
          {/* create a line chart here */}
    </Col>
    <Col>     
    <h5   className="text-center">Create a Radar Chart</h5>
     {/* create a radar here */}
    </Col> 
    <Col>     
    <h5  className="text-center">Create a Scatter Chart</h5>
     {/* create a scatter chart here */}
    </Col> 
    </Row>

    </div>
  );
}

export default App;
