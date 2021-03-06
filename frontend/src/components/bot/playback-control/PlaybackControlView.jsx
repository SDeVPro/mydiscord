import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './playback-control.css';

export default (props) => {

	const {controlPlayback} = props;

	return (
		
			<nav className="toolbar">
				<ul className="toolbar-list">
					<li className="toolbar-item">
						<FontAwesomeIcon icon={['fas','backward']} className="fa-icon" style={{color:"#99aab5"}} onClick = {() => controlPlayback("prev")}/>
					</li>
					<li className="toolbar-item">
						<FontAwesomeIcon icon={['fas','pause']} className="fa-icon" style={{color:"#99aab5"}} onClick = {() => controlPlayback("pause")}/>
					</li>
					<li className="toolbar-item">
						<FontAwesomeIcon icon={['fas','play']} className="fa-icon" style={{color:"#99aab5"}} onClick = {() => controlPlayback("resume")}/>
					</li>
					<li className="toolbar-item">
						<FontAwesomeIcon icon={['fas','forward']} className="fa-icon" style={{color:"#99aab5"}} onClick = {() => controlPlayback("skip")}/>
					</li>
					<li className="toolbar-item">
						<FontAwesomeIcon icon={['fas','stop-circle']} className="fa-icon" style={{color:"#99aab5"}} onClick = {() => controlPlayback("stop")}/>
					</li>
				</ul>
			</nav>
			
	);
};
          
            