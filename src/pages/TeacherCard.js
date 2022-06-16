import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLocationDot, faCircleCheck, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
const TeacherCard = () => {
    return (
        <div className=''>
            <div className='text-center text-blue-700'>
                <p className='py-5 text-3xl'>En quelle matiere avez vous besoin d'aide ?</p>
                <h2 className='py-5 text-3xl'>Les Teacher's qui pourraient vous correspondre</h2>
            </div>
            <div className='grid grid-cols-3 gap-10 py-16'>
                <div className='bg-blue-100 rounded-xl px-5 drop-shadow-xl'>
                    <div className='flex flex-col items-center '>
                        <img src='alex.jpg' className='rounded-full w-44 h-44 -translate-y-16' alt='g' />
                        <h1 className='text-blue-700 uppercase -top-8'>marie Dardell</h1>
                        <span className='text-yellow-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                        <span className='text-xs'>20 heures données</span>
                    </div>
                    <ul className='py-5'>
                        <li><FontAwesomeIcon className='pr-2' icon={faGraduationCap} /> HEC, 1ere année </li>
                        <li><FontAwesomeIcon className='pr-2' icon={faGlobe} />bilingue </li>
                        <li><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />diplomé verifié</li>
                        <li><FontAwesomeIcon className='pr-2' icon={faLocationDot} />Paris</li>
                    </ul>
                    <h2 className='text-blue-700'>Description</h2>
                    <p className='pt-3'>Lorem ipsum dolor sit amet. Ut tempore aliquid eum enim veniam non
                        atque odio id quia enim aut quisquam magnam qui sunt corporis.
                    </p>
                    <div className='flex flex-col items-center translate-y-6'>
                        <button className='bg-blue-700 rounded-full text-white px-11 py-2'>choisir</button>
                    </div>

                </div>
                <div className='bg-blue-100 rounded-xl px-5 drop-shadow-xl'>
                    <div className='flex flex-col items-center '>
                        <img src='alex.jpg' className='rounded-full w-44 h-44 -translate-y-16' alt='g' />
                        <h1 className='text-blue-700 uppercase -top-8'>marie Dardell</h1>
                        <span className='text-yellow-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                        <span className='text-xs'>20 heures données</span>
                    </div>
                    <ul className='py-5'>
                        <li><FontAwesomeIcon className='pr-2' icon={faGraduationCap} /> HEC, 1ere année </li>
                        <li><FontAwesomeIcon className='pr-2' icon={faGlobe} />bilingue </li>
                        <li><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />diplomé verifié</li>
                        <li><FontAwesomeIcon className='pr-2' icon={faLocationDot} />Paris</li>
                    </ul>
                    <h2 className='text-blue-700'>Description</h2>
                    <p className='pt-3'>Lorem ipsum dolor sit amet. Ut tempore aliquid eum enim veniam non
                        atque odio id quia enim aut quisquam magnam qui sunt corporis.
                    </p>
                    <div className='flex flex-col items-center translate-y-6'>
                        <button className='bg-blue-700 rounded-full text-white px-11 py-2'>choisir</button>
                    </div>

                </div>
                <div className='bg-blue-100 rounded-xl px-5 drop-shadow-xl'>
                    <div className='flex flex-col items-center '>
                        <img src='alex.jpg' className='rounded-full w-44 h-44 -translate-y-16' alt='g' />
                        <h1 className='text-blue-700 uppercase -top-8'>marie Dardell</h1>
                        <span className='text-yellow-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></span>
                        <span className='text-xs'>20 heures données</span>
                    </div>
                    <ul className='py-5'>
                        <li><FontAwesomeIcon className='pr-2' icon={faGraduationCap} /> HEC, 1ere année </li>
                        <li><FontAwesomeIcon className='pr-2' icon={faGlobe} />bilingue </li>
                        <li><FontAwesomeIcon className='pr-2' icon={faCircleCheck} />diplomé verifié</li>
                        <li><FontAwesomeIcon className='pr-2' icon={faLocationDot} />Paris</li>
                    </ul>
                    <h2 className='text-blue-700'>Description</h2>
                    <p className='pt-3'>Lorem ipsum dolor sit amet. Ut tempore aliquid eum enim veniam non
                        atque odio id quia enim aut quisquam magnam qui sunt corporis.
                    </p>
                    <div className='flex flex-col items-center translate-y-6'>
                        <button className='bg-blue-700 rounded-full text-white px-11 py-2'>choisir</button>
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