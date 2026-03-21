import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BigData from './pages/solutions/BigData';
import AIML from './pages/solutions/AIML';
import QuantumIntegration from './pages/solutions/QuantumIntegration';
import QSSSimulator from './pages/tech/QSSSimulator';
import UniversalTechnique from './pages/tech/UniversalTechnique';
import UQF from './pages/tech/UQF';
import TSLANN from './pages/tech/TSLANN';
import QuantumVaR from './pages/tech/QuantumVaR';
import QRATAssessment from './pages/products/QRATAssessment';
import EnterpriseSolutions from './pages/products/EnterpriseSolutions';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/big-data" element={<BigData />} />
            <Route path="/solutions/ai-ml" element={<AIML />} />
            <Route path="/solutions/quantum-integration" element={<QuantumIntegration />} />
            <Route path="/tech/qss-simulator" element={<QSSSimulator />} />
            <Route path="/tech/universal-technique" element={<UniversalTechnique />} />
            <Route path="/tech/uqf" element={<UQF />} />
            <Route path="/tech/tsl-ann" element={<TSLANN />} />
            <Route path="/tech/quantum-var" element={<QuantumVaR />} />
            <Route path="/products/qrat-assessment" element={<QRATAssessment />} />
            <Route path="/products/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
