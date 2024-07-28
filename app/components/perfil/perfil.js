'use client';

import './perfil.css'
import profilePic from '../../../public/imgs/FotoCV_1.jpg';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const Perfil = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const storedState = localStorage.getItem('isExpanded');
        setIsExpanded(storedState === 'true');
    }, []);

    useEffect(() => {
        localStorage.setItem('isExpanded', isExpanded);
    }, [isExpanded]);

    const toggleProfileContainer = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="modal_perfil" style={{ width: isExpanded ? '60vh' : '0', height: isExpanded ? 'auto' : '10vh', background: isExpanded ? 'rgb(2,0,36)' : 'rgba(0,0,0,0)' }}>
            <div className={`profileContainer ${isExpanded ? 'expanded' : ''}`}>
                <div className='profileImage'>
                    <Image
                        src={profilePic}
                        alt="Profile Image"
                        width={isExpanded ? 150 : 'auto'}
                        height='auto'
                    />
                </div>
                {isExpanded && (
                    <div className='profileDetails'>
                        <h2>Sergio Diaz Ruiz</h2>
                        <h3>Soy un apasionado de la programación, con un enfoque constante en el aprendizaje. Mi interés en la innovación me ha llevado a especializarme en la inteligencia artificial aplicada a microcontroladores (TinyML), motivo por el cual actualmente estoy cursando una especialización en IA en 42 Málaga Fundación Telefónica.</h3>
                    </div>
                )}
            </div>
            <button className='button_perfil' onClick={toggleProfileContainer}>
                {isExpanded ? 'Comprimir' : 'Expandir'}
            </button>
        </div>
    );
};

export default Perfil;
