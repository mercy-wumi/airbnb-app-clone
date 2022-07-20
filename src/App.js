import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAirbnbUser, setUserId } from './features/authUser/userSlice'

function App() {
  const dispatch = useDispatch()
  const { airbnbUser } = useSelector((store) => store.user)
  const { login } = useSelector(store => store.modal)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        console.log(authUser)
        dispatch(setUserId(authUser.uid));
        dispatch(setAirbnbUser(authUser));
        // if (authUser.displayName) {
        //   // user has display name
        // }
        // else {
        //   return authUser.updateProfile({
        //     displayName: firstname,
        //     email: email,
        //     photoURL: imgUrl
        //   })
        // }
      }
      else {
        // user logs out
        dispatch(setAirbnbUser(null))
      }
    })

    return () => {
      unsubscribe();
    }
  }, [airbnbUser])

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
