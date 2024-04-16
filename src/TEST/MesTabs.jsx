import React, { useState } from 'react'

function MesTabs() {

    const [active, setActive] = useState(0)

    const tabDetails = [
        {
            titre : "Nadia Karène Shaélah",
            contenu : "NKS__ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores iste autem velit atque unde itaque quaerat illo vitae delectus quam sapiente, voluptate harum quibusdam voluptatibus ducimus fuga magni! Cupiditate!"
        },
        {
            titre : "Sira Sidibé",
            contenu : "SS__ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores iste autem velit atque unde itaque quaerat illo vitae delectus quam sapiente, voluptate harum quibusdam voluptatibus ducimus fuga magni! Cupiditate!"
        },
        {
            titre : "Arsène Coulibaly",
            contenu : "AC__ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores iste autem velit atque unde itaque quaerat illo vitae delectus quam sapiente, voluptate harum quibusdam voluptatibus ducimus fuga magni! Cupiditate!"
        },
        {
            titre : "Joa Minanyéfian Touré",
            contenu : "JMT__ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores iste autem velit atque unde itaque quaerat illo vitae delectus quam sapiente, voluptate harum quibusdam voluptatibus ducimus fuga magni! Cupiditate!"
        },
    ]



    return (
        <div className="container mx-auto">
            <div className="w-3/4 mx-auto p-10 mt-20 bg-slate-300 flex justify-between">
                {tabDetails.map((tab, indx) => (
                    <div key={indx} className={`cursor-pointer ${indx === active ? "bg-red-600" : "bg-yellow-400"}`}>
                        <h2 onClick={() => setActive(indx)} className='flex'>{tab.titre}</h2>
                    </div>
                ))}
            </div>
            <div className="">
                {tabDetails[active].contenu}
            </div>
        </div>
    )
}

export default MesTabs;

/**_______________________TTTTTTTTTTTTTTTTTTTTEEEEEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTT_______________________ */

// import { faBookBookmark, faBoxesStacked, faList12 } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Orders from './Orders/Orders'
// import Reservations from './Reservations/Reservations'
// import Quotes from './Quotes/Quotes'


// function Main() {

//     const [ordersBoxIsClicked, setOrdersBoxIsClicked] = useState(false)
//     const [reservsBoxIsClicked, setReservsOrdersBoxIsClicked] = useState(false)
//     const [quotesBoxIsClicked, setQuotesBoxIsClicked] = useState(false)

//     const [activeTab, setActiveTab] = useState(0);

//     const Test = [
//         {
//             titre : "Commandes",
//             contenu : <Orders/>
//         },
//         {
//             titre : "Réservations",
//             contenu : <Reservations/>
//         },
//         {
//             titre : "Quotes",
//             contenu : <Quotes/>
//         }
//     ]

//     return (
//         //  transition duration-500 ease-in-out hover:text-cyan-800 transform hover:-translate-y-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]
//         <section className="main py-4 px-6 flex flex-col cursor-pointer">
//             <div className=" py-10 header grid grid-cols-3 gap-4 ">
//             {Test.map((test, indx) => (
//                 <div key={indx} className={`${indx === activeTab ? "bg-blue-600" : "bg-red-700"}`}>
//                     <h2 onClick={() => setActiveTab(indx)} className="flex">{test.titre}</h2>
//                 </div>
//             ))}
//             </div>
//             <div className="">
//                 {Test[activeTab].contenu}
//             </div>
            
//         </section>
//     )
// }

// export default Main;