import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faList, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

const Navigation = () => {
    return (
        <div className='main'>
            <div>
                <img src='logo.png' className='w-32 h-8 -translate-y-20' alt='bolo' />
            </div>
            <div>
                <nav>
                    <ul className='-translate-y-20 text-lg'>
                        <span className='text-green-900'>...</span>
                        <li className='pb-5 text-green-900'><Link  exact to="/votredemande" ><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />Votre demande</Link></li>
                        <li className='pb-5 text-blue-500'><Link exact to="/Nospropositions" ><FontAwesomeIcon className='pr-2' icon={faList} />Nos propositions</Link></li>
                        <li className='pb-5  text-blue-500'><Link exact to="/Paiement" ><FontAwesomeIcon className='pr-2' icon={faHandHoldingDollar} />Paiement</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src='T.png'className='h-44' alt='bolo'/>
            </div>

        </div>
    );
};

export default Navigation;