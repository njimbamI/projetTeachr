import React from 'react';
import Navigation from '../Navigation/Navigation';
import TeacherCard from './TeacherCard';

const Votredemande = () => {
    return (
        <div className='flex'>
            <Navigation/>
            <div className='w-4/5 ml-10'>
                <TeacherCard/>
            </div>
        </div>
    );
};

export default Votredemande;