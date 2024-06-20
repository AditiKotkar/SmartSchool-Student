import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Project.css';
import { Link} from 'react-router-dom';
function Project() {
    return (
    <div className='Projectcontene'>
    <div className='Projecticn'>
    <Link to="/EventCalender"><FontAwesomeIcon icon={faArrowLeft} className='Projecticons' /></Link>
    <FontAwesomeIcon icon={faPlus}  className='Projecticons' /> 
    </div>
<h1 className='Projecttime'>Today, 10:30AM</h1>
<div className='Projectcale'>
    <h1 className='Projectconference'>National level Project Conference</h1>
    <h2 className='ProjectTECHyear'>TECH EXPO 2024</h2>
    <div className='ProjectMAP'>
    <FontAwesomeIcon icon={faMapMarkerAlt}  className='Projectmap' />
    <h3 className='Projectlocation'>Loni, Maharastra</h3>
    </div>
    <p className='ProjectPar'>Nade omins iste natus error sited voluptaccusantum edolor emque lauda ntium totam arrem apriram eaque ipsa , quae ab uillo invento re et quasi architech beatae vitae shunt ntium , totam arrem aperim et quasi.architecto beatae vitae. </p>
   <div className='Projectimg'></div>
   <div className='Projectbut'>Join</div>
</div>
</div>
    );       
};
export default Project;