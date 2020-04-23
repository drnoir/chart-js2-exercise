import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Number of Deaths',
		'Number of Survivors',
		'Number of Injured'
	],
	datasets: [{
		data: [2000, 5000, 9001],
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

export default React.createClass({
  displayName: 'OurChart',

  render() {
    return (
      <div>
        <h2>Our Chart</h2>
        <Doughnut data={data} />
      </div>
    );
  }
});
