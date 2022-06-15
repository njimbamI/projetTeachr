import React from 'react';

const Navigation = () => {
    return (
        <div className='main'>
            <div>
                <img src='bolo.jpeg' className='img' alt='bolo' />
            </div>
            <div>
                <nav>
                    <ul className='justify-center items-center'>
                        <li className='bolo'><Link className='card' exact to="/Competences" ><FontAwesomeIcon icon={faMountain} /> Compétences</Link></li>
                        <li className='bolo'><Link className='card' exact to="/portfolio" > <FontAwesomeIcon icon={faImage} />Portfolio</Link></li>
                        <li className='bolo'><Link className='card' exact to="/Contact" ><FontAwesomeIcon icon={faUser} /> Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;