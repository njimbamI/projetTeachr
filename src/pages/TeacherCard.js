import React, { } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLocationDot, faCircleCheck, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';


const TeacherCard = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='py-5 text-3xl text-center text-blue-700'>Les Teacher's qui pourraient vous correspondre</h2>
                <div className=' py-12'>
                    <div className='flex items-center'>
                        <div className='bg-blue-100 rounded-xl px-5 drop-shadow-xl mr-6 w-80'>
                            <div className='flex flex-col items-center'>
                                <img src='alex.jpg' className='rounded-full w-16 -translate-y-8' />
                                <h1 className='text-blue-700 uppercase'>marie dardell</h1>
                                <span className='text-yellow-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                                <small>20 heures données</small>
                            </div>
                            <p className='text-xs'></p>
                            <ul className='py-5'>
                                <li><FontAwesomeIcon className='pr-2' icon={faGraduationCap} /> HEC, 1ere année </li>
                                <li><FontAwesomeIcon className='pr-2' icon={faGlobe} />bilingue </li>
                                <li><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />diplomé verifié</li>
                                <li><FontAwesomeIcon className='pr-2' icon={faLocationDot} />Paris</li>
                            </ul>
                            <h2 className='text-blue-700'>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className='flex flex-col items-center translate-y-6'>
                                <button className='bg-blue-700 rounded-full text-white px-11 py-2'>choisir</button>
                            </div>
                        </div>
                        <div className='bg-blue-100 rounded-xl px-5 drop-shadow-xl mr-6 w-80'>
                            <div className='flex flex-col items-center'>
                                <img src='alex.jpg' className='rounded-full w-16 -translate-y-8' />
                                <h1 className='text-blue-700 uppercase'>marie dardell</h1>
                                <span className='text-yellow-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                                <small>20 heures données</small>
                            </div>
                            <p className='text-xs'></p>
                            <ul className='py-5'>
                                <li><FontAwesomeIcon className='pr-2' icon={faGraduationCap} /> HEC, 1ere année </li>
                                <li><FontAwesomeIcon className='pr-2' icon={faGlobe} />bilingue </li>
                                <li><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />diplomé verifié</li>
                                <li><FontAwesomeIcon className='pr-2' icon={faLocationDot} />Paris</li>
                            </ul>
                            <h2 className='text-blue-700'>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className='flex flex-col items-center translate-y-6'>
                                <button className='bg-blue-700 rounded-full text-white px-11 py-2'>choisir</button>
                            </div>
                        </div>
                        <div className='bg-blue-100 rounded-xl px-5 drop-shadow-xl mr-6 w-80'>
                            <div className='flex flex-col items-center'>
                                <img src='alex.jpg' className='rounded-full w-16 -translate-y-8' />
                                <h1 className='text-blue-700 uppercase'>marie dardell</h1>
                                <span className='text-yellow-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                                <small>20 heures données</small>
                            </div>
                            <p className='text-xs'></p>
                            <ul className='py-5'>
                                <li><FontAwesomeIcon className='pr-2' icon={faGraduationCap} /> HEC, 1ere année </li>
                                <li><FontAwesomeIcon className='pr-2' icon={faGlobe} />bilingue </li>
                                <li><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />diplomé verifié</li>
                                <li><FontAwesomeIcon className='pr-2' icon={faLocationDot} />Paris</li>
                            </ul>
                            <h2 className='text-blue-700'>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className='flex flex-col items-center translate-y-6'>
                                <button className='bg-blue-700 rounded-full text-white px-11 py-2'>choisir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-around text-center py-3'>
                <button>Précedent</button>
                <button className='ring-2 ring-blue-800 rounded-full px-9 py-1'>Suivant</button>
            </div>

        </div>
    );
};

export default TeacherCard;