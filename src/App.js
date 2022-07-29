import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
// import { db } from './firebase'
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAirbnbUser, setUserId } from './features/authUser/userSlice'
// import { collection, getDoc } from "firebase/firestore";

function App() {
  const dispatch = useDispatch()
  // const { userId } = useSelector((store) => store.user)
  const { login } = useSelector(store => store.modal)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        console.log(authUser)
        dispatch(setUserId(authUser.uid));
        // dispatch(setAirbnbUser(authUser));

      }
      else {
        // user logs out
        dispatch(setAirbnbUser(null))
      }
    })

    return () => {
      unsubscribe();
    }
  })
  // useEffect(() => {
  //   getUser()
  // }, [])

  // const getUser = () => {
  //   const userData = collection(db, 'user-details', userId)
  //   getDoc(userData).then(res => {
  //     console.log(res)

  //   }).catch(err => console.log(err.message))
  // }

  useEffect(() => {
    if (login) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [login]);

  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
