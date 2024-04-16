import React from 'react'
import { getDatabase, onValue, ref, update } from "firebase/database";
import { database } from '../firebase-config'

import { query, where, getDocs } from "firebase/firestore";


function Test() {

  const handleFilter = async () => {
    const q = query( ref(getDatabase(database), `/Commandes`),
    // collection(db, "location"),
    where("location", "==", "Pasig")
    );

    const querySnapshot = await getDocs(q);
    console.log("qp ::: ", querySnapshot);
    // querySnapshot.forEach((doc) => {
    // doc.id, "=>", doc.data();
    // });


    update(ref(getDatabase(database), "Commandes/" + String("id")), {
      status: "state",
  });

  console.log("state commandID : ", "commandID");
  let test = ref(getDatabase(database), `/Commandes/${"commandID"}`)
  console.log("test :: ", test);
  let recup;
  onValue(test, snapshort => {
      recup = snapshort.val()
      console.log("snapshort.val() ::: " , snapshort.val())
  })
  console.log("recup ::: ", recup);
  update(ref(getDatabase(database), `/Commandes/${"commandID"}`),
      "setOrderInfos"({...recup, status:"non"}),
      console.log("orderInfos validate : ", "orderInfos")
  )
  // update(ref(database), `/Commandes/${commandID}`).then( () => {
      // Success How To Update Data To Firebase No SQL Realtime Database Using React Native 
  // })
  /**
   * const setActiveAccount = (addressId) => {
  setLoggedUser({
      ...loggedUser,
      selectedAddressId: addressId
  });
}
// onValue(commandId, snapshort => {
      //     let commandData = snapshort.val()
      //     console.log("commandData ::: ", commandData);


      //     // update({...commandData.status = "YESSSS"})
      //     // const updateOrderStatus = {
      //     //     commandId,
      //     //     ...commandData.status = "changeeeeeeee"
      //     // }
      //     // update(updateOrderStatus)
      // })
   */
}

  return (
    <div className='text-lg text-rose-700 w-2/6 h-96 mx-auto bg-pink-200 p-4 my-10 overflow-scroll'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus possimus aliquam, molestias quaerat voluptas nam architecto. Similique aliquam ipsa delectus, enim blanditiis reiciendis neque at quos deserunt, eligendi id vitae assumenda dolore repellendus fugit ab architecto temporibus ducimus dolorum quidem. At autem assumenda nulla eum accusantium dicta sunt doloremque tempora natus officiis nihil vel qui molestiae iure ad earum, quod quisquam minus dignissimos repellendus laborum beatae itaque neque sit? Dignissimos eaque numquam temporibus ipsum? Officiis eveniet ipsam sint quos, sed voluptas ducimus odit ea minus in neque, optio iure vel dolore nisi earum modi necessitatibus nostrum saepe fuga iste, incidunt repellendus. Cumque, non consectetur? Maxime eos placeat dicta quis fugiat iure vero praesentium architecto veritatis. Tempore ab maxime ullam sapiente quos expedita, mollitia odit incidunt. Consequuntur sapiente, ad error facere magni ducimus incidunt tempora totam. Voluptates, ullam! Sit necessitatibus reprehenderit nam, aspernatur nesciunt harum ex et aut laudantium blanditiis molestias alias, quam maxime. Provident, mollitia dolor possimus illum quo consectetur ab aliquid doloribus sapiente similique excepturi dolores quasi itaque at dolore odit inventore? Temporibus, sequi deleniti non quis dolores aliquam cupiditate et eligendi officia omnis sed sunt deserunt, rerum voluptates, ea magni error qui dicta? Libero rem vitae accusantium dolorum, quos est quaerat repellat a recusandae, repudiandae vero corrupti vel! Unde dicta aliquid sunt. Consectetur sequi amet in dolore provident vitae rerum voluptatibus eveniet distinctio enim repellendus similique dolorem tempora expedita consequatur voluptates vel praesentium, eius dignissimos eligendi eos? Quia cupiditate quasi tempore illum fugiat nihil excepturi adipisci, hic dicta sed quas consequatur consequuntur veritatis blanditiis odit accusamus illo possimus! Qui, itaque inventore. Eaque libero repudiandae nostrum deleniti reprehenderit accusantium voluptatum sunt at quisquam ratione nisi, assumenda quasi consequuntur voluptate labore? Fugit libero ipsum explicabo ea sed vitae quis. Accusantium sint suscipit assumenda voluptatibus tempora ut expedita praesentium harum a.
    </div>
  )
}

export default Test


/**
 * const validateOrder = async (command) => {
        try {
            const commandId = ref(getDatabase(database), `/Commandes/${command.commandeId}`)
            console.log("commandId ::: ", commandId);
            // let commandData;
            onValue(commandId, snapshort => {
                let commandData = snapshort.val()
                console.log("commandData ::: ", commandData);

                update(ref(getDatabase(database), `Commandes/${command.commandeId}`), {
                    status: "stateee",
                });

                // update({...commandData.status = "YESSSS"})
                // const updateOrderStatus = {
                //     commandId,
                //     ...commandData.status = "changeeeeeeee"
                // }
                // update(updateOrderStatus)
            })
        } catch (error) {
            console.log(error);
        }
    }

    const cancelOrder = (commandID) => {
        update(ref(getDatabase(database), "Commandes/" + String("id")), {
            status: "state",
        });

        console.log("state commandID : ", commandID);
        let test = ref(getDatabase(database), `/Commandes/${commandID}`)
        console.log("test :: ", test);
        let recup;
        onValue(test, snapshort => {
            recup = snapshort.val()
            console.log("snapshort.val() ::: " , snapshort.val())
        })
        console.log("recup ::: ", recup);
        update(ref(getDatabase(database), `/Commandes/${commandID}`),
            setOrderInfos({...recup, status:"non"}),
            console.log("orderInfos validate : ", orderInfos)
        )
        // update(ref(database), `/Commandes/${commandID}`).then( () => {
            // Success How To Update Data To Firebase No SQL Realtime Database Using React Native 
        // })
        /**
         * const setActiveAccount = (addressId) => {
        setLoggedUser({
            ...loggedUser,
            selectedAddressId: addressId
        });
    }
        
  }
 */