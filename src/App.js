import { Container, Col, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import LandingPage from "./LandingPage";
import AlbumPage from "./AlbumPage";
import './App.css';
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import Members from "./Members";
import ProfileView from "./ProfileView";
import PostComment from "./PostComment";
import Comments from "./Comments";
import MyProfile from "./MyProfile";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//import ProtectedRoutes from "./ProtectedRoutes";
//import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import EditUser from "./EditUser";
const cookies = new Cookies();

function App() {
  const ProtectedRoutes = ({ children }) => {
    let location = useLocation();
    const token = localStorage.getItem("TOKEN");

    // returns route if there is a valid token set in the cookie
    if (!token) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
  };

  return (
    <Col className="App">
      <Routes>
      <Route exact path="/Album" element={<AlbumPage />} />
        <Route exact path="/Forums" element={<Home />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/profile/:user" element={<ProfileView/>} />
        <Route path="/PostComment/:postId" element={<PostComment/>} />
        <Route path="/comment/:postId" element={<Comments/>} />
        <Route path="/myProfile/:user" element={<MyProfile/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/free" element={<FreeComponent />} />
        <Route exact path="/userlist" element={<Members />}/>
        <Route exact path="/auth" element={<ProtectedRoutes><AuthComponent /></ProtectedRoutes>} />
      </Routes>
    </Col >
  );
}

export default App;