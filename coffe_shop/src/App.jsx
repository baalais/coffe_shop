import './style/App.css'
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import Firstpage from "./components/FirstPage.jsx";
import Secondpage from "./components/SecondPage.jsx";
import Thirdpage from "./components/ThirdPage.jsx";
import Fourthpage from "./components/FourthPage.jsx";
import Fifthpage from "./components/FifthPage.jsx";
import CustomerReviews from "./components/CustomerReviews.jsx";
import Times from "./components/Times.jsx";
import Branches from "./components/Branches.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Firstpage />
            <Secondpage />
            <Thirdpage />
            <Fourthpage />
            <Fifthpage />
            <CustomerReviews />
            <Times />
            <Branches />
            <Footer />
        </Router>
    );
}
export default App;