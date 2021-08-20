import React from 'react';
import './FireListing.css';


let buttonStatus = 'open';
const FireListing = (props) => {
	// console.log(props.data)
	let list;
	//const fon = props.data.length > 0 ? props.data.filter(d => d.properties.state === 'CALIFORNIA') : [];
	//const fon = props.data.length > 0 ? props.data.filter(d => d.properties.state === 'CALIFORNIA') : [];
	const fon = props.data.filter(d => d.properties.state === 'CALIFORNIA');
	//console.log(fon);
	// NO FON? HIDE SIDEBAR
	if (fon.length > 0) {
		// YES FON
		/*list = fon.sort((a,b) => {
				return b.properties.size - a.properties.size
			}) */
		list = fon.map(d => {
				return ListItem(d.properties, props.flyToLocation);
			});	
	} /*else {
		// hide sidebar
		list = <li className="no-fires">Currently there are no fires of note in California</li>
	} */


	return (
		<div className="sidebar">
			<div className="header2">
				<h2>Active Fires</h2>
				<div className="button">
					<input type="checkbox" id="switch" className="open" onChange={toggleSidebar} /><label htmlFor="switch"></label>
				</div>
			</div>
			<ul id="listings" className={`listings`}>
				{list}
			</ul>
		</div>
	);
}

function ListItem(data, clickHandler) {
	//const size = Math.round((data.parseFloat(size)));
	const size = data.size;
	//const size = Math.round((data.DailyAcres / 100) * 10) / 10;
	const name = data.name; // data.fire_name.split(' (')[0]

	// console.log(name, data)

	//const sizeText = size > 0.1 ? `${size} acres` : 'Spot fire';
	return (
		<li key={data.name} id={data.name} className="item" onClick={clickHandler}>
			<h4 className="title">{name}</h4>
			<p className="size">{size}</p>
			<p className="location">{data.summary}</p>
		</li>
	);
}

function toggleSidebar(e) {
	console.log(e)
	const sidebar = document.getElementById('listings');

	if (buttonStatus === 'open') {
		e.target.className = 'closed';
		sidebar.className = 'listings closed';
		buttonStatus = 'closed';
	} else {
		e.target.className = 'open';
		sidebar.className = 'listings open';
		buttonStatus = 'open';
	}
}

export default FireListing;
