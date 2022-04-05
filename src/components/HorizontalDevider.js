import React from 'react';
import leftHrArrow from '../Images/leftHrArrow.svg';
import rightHrArrow from '../Images/rightHrArrow.svg';
import hrSecLeftMob from '../Images/hrSecLeftMob.svg';
import hrSecRightMob from '../Images/hrSecRightMob.svg'

function HorizontalDevider(props) {
    return (
        <>
            <div className="container horiZontalDivider" style={props.customeStyle}>
                <img className="hrLD" src={leftHrArrow} alt={leftHrArrow} style={props.customWidth} />
                {/* <img style={props.customMobHr} src={hrSecLeftMob} alt="" className="hrLM" /> */}

                {props.hrName}
                <img className="hrLD" src={rightHrArrow} alt={rightHrArrow} style={props.customWidth} />
                {/* <img style={props.customMobHr} src={hrSecRightMob} alt="" className="hrLM" /> */}
            </div>

        </>
    )
}

export default HorizontalDevider
