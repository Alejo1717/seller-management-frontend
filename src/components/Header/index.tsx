import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props { }
const HeaderAct = (props: Props) => {
    const location = useLocation();

    return (
        <div className='header-content'>
            <div className="form-row"  >
                <h2>ACT</h2>
            </div>
        </div>
    )
}

export default HeaderAct;
