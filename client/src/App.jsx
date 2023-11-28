import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page from "./components/Page1";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPass from "./components/ForgotPass";
import NewPass from "./components/NewPass";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import ObjectFinding from "./components/ObjectFinding";
import EditProfile from "./components/EditProfile";
import DelAcc from "./components/DelAcc";
import AudioEnhancement from "./components/AudioEnhancement";
import AudioDetection from "./components/AudioDetection";
import ImageEnhancement from "./components/ImageEnhancement";
import ImageDetection from "./components/ImageDetection";
import VideoEnhancement from "./components/VideoEnhancement";
import VideoDetection from "./components/VideoDetection";
import { Hosted } from './components/stripe/Hosted';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route exact path='/Plans' element={<Hosted />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/ForgotPass" element={<ForgotPass />} />
        <Route exact path="/newPass" element={<NewPass />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/DelAcc" element={<DelAcc />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Navbar" element={<Navbar />} />
        <Route exact path="/EditProfile" element={<EditProfile />} />
        <Route exact path="/ObjectFinding" element={<ObjectFinding />} />
        <Route exact path="/AudioEnhancement" element={<AudioEnhancement />} />
        <Route exact path="/AudioDetection" element={<AudioDetection />} />
        <Route exact path="/ImageEnhancement" element={<ImageEnhancement />} />
        <Route exact path="/ImageDetection" element={<ImageDetection />} />
        <Route exact path="/VideoEnhancement" element={<VideoEnhancement />} />
        <Route exact path="/VideoDetection" element={<VideoDetection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

