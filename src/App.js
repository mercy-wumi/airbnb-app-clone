import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAirbnbUser } from './features/authUser/userSlice'

function App() {
  const dispatch = useDispatch()
  const { airbnbUser } = useSelector((store) => store.user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        console.log(authUser)
        dispatch(setAirbnbUser(authUser))
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

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
