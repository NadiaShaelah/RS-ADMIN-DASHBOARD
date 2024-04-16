import React from 'react'
import { faChartLine, faGear, faMessage, faSignOut, faTableCellsLarge, faTasksAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import appchaplogo from '../../images/app-chap-logo.png'


function SideBar() {
    return (
        <section className="sidebar bg-blue-950 h-screen py-10 flex flex-col items-center">
            <div className="py-4 px-6">
                <ul className='flex flex-col gap-16 text-white relative'>
                    <li className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200 text-center -mt-[4rem] -ml-[2rem]'>
                        <img src={appchaplogo} alt="app-chap-logo" className="w-[10rem]"/>
                    </li>
                    <li className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200 border-b-[1px] border-b-blue-900'><FontAwesomeIcon className='mr-2' icon={faTableCellsLarge}/>Dashboard</li>
                    <li className='border-b-[1px] border-b-blue-900'>
                        <div className="flex flex-col gap-4">
                            <span className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'><FontAwesomeIcon className='mr-2' icon={faTasksAlt}/>Tâches</span>
                            <span className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'><FontAwesomeIcon className='mr-2' icon={faMessage}/>Messages</span>
                            <span className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'><FontAwesomeIcon className='mr-2' icon={faChartLine}/>Analitics</span>
                        </div>
                    </li>
                    <li className='border-b-[1px] border-b-blue-900'>
                        <div className="flex flex-col gap-4">
                            <span className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'><FontAwesomeIcon className='mr-2' icon={faUserTie}/>Admin</span>
                            <span className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'><FontAwesomeIcon className='mr-2' icon={faGear}/>Parametres</span>
                        </div>
                    </li>
                    <li className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200 absolute top-[46rem]'><FontAwesomeIcon className='mr-2' icon={faSignOut}/>Deconnexion</li>
                </ul>
            </div>
        </section>
    )
}

export default SideBar