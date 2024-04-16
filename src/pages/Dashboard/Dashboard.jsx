import React from 'react'
import './Dashboard.css'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import Main from '../../components/Main/Main'
import Analytics from '../../components/Analytics/Analytics'

function Dashboard() {
    return (
        <section className="dashboard bg-blue-100">
            <div class="containerr">
                <header>
                    <NavBar/>
                </header>
                <nav>
                    <SideBar/>
                </nav>
                <main><Main/></main>
                <aside><Analytics/></aside>
            </div>
        </section>
    )
}

export default Dashboard