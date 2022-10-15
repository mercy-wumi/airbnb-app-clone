import { db } from '../firebase'

import { collection, getDoc, setDoc, addDoc, doc, updateDoc } from 'firebase/firestore'

const homeCollectionRef = collection(db, 'user-data')
class HomeDataService {
    addData = (data) => {
        return addDoc(homeCollectionRef, data)
    }

    updateData = (id, updatedData) => {
        const homeDoc = doc(db, 'user-data', id)
        return updateDoc(homeDoc, updatedData)
    }

    getData = (id) => {
        const homeDoc = doc(db, 'user-data', id)
        return getDoc(homeDoc)
    }
    setData = (id, updatedData) => {
        const homeDoc = doc(db, 'user-data', id)
        return setDoc(homeDoc, updatedData, { merge: true })
    }
}

export default new HomeDataService()