import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"
import AboutPages from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import './styles/pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);

  };
  return (
   <>
   <div>
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Omkar Nilesh Kolekar"
          studentPhotoUrl=" "
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPages/>}/>
      <Route path="/courses" element={<CoursesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/admission" element={<AdmissionPage/>}/>
    </Routes>
      <ChatbotComponent/>
     </Router>
  </>

  )
}

export default App;