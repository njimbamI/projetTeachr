import React, { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import TeacherCard from './TeacherCard';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';





const Votredemande = () => {
 const url= 'https://doc.data.gouv.fr/api/reference/#/users/list_users'
    useEffect(() =>{
        axios
          .get(url)
          .then((res)=>console.log(res));
    }, []);


    return (
        <div className='flex'>
            <Navigation />
            <div className='w-4/5 ml-10'>
            <div className=' flex flex-col items-center'>
                <p className='text-center text-3xl py-5'>En quelle matiere avez vous besoin d'aide ?</p>
                <label className="relative block">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2"><SearchIcon />
                    </span>
                </label>
               
            </div>
            <TeacherCard/>

            </div>
         
        </div>
    );
};

export default Votredemande;