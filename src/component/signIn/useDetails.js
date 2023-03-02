import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../config'


const UseDetails = () => {

    const collectionData = collection(db, "users")

    const data = getDocs(collectionData)

    const [userInfo, setUserInfo] = useState([])

    async function getData() {
        const res = await (data)
        const result = res.docs
        setUserInfo(result.map(e => (e.data())))
        console.log("INFO ",userInfo);
        console.log("FIREBASE : ", result);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            Hello
            {userInfo?.map((doc) => {
                console.log("hi", doc);

                return <h1>{doc.userData.p1.name}</h1>
            })}
        </div>
    )
}

export default UseDetails