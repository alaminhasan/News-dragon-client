import React from 'react';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
const Qzone = () => {
    return (
        <div>
            <h4>Q-Zone</h4>
            <div className='bg-primary text-center my-4 py-4'>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;