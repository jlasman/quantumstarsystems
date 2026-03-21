import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const BigData = lazy(() => import('./pages/solutions/BigData'));
const AIML = lazy(() => import('./pages/solutions/AIML'));
const QuantumIntegration = lazy(() => import('./pages/solutions/QuantumIntegration'));
const QSSSimulator = lazy(() => import('./pages/tech/QSSSimulator'));
const UniversalTechnique = lazy(() => import('./pages/tech/UniversalTechnique'));
const UQF = lazy(() => import('./pages/tech/UQF'));
const TSLANN = lazy(() => import('./pages/tech/TSLANN'));
const QuantumVaR = lazy(() => import('./pages/tech/QuantumVaR'));
const QRATAssessment = lazy(() => import('./pages/products/QRATAssessment'));
const EnterpriseSolutions = lazy(() => import('./pages/products/EnterpriseSolutions'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
