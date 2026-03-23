import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';

const Home = lazy(() => import('./pages/Home'));
const HospitalROI = lazy(() => import('./pages/HospitalROI'));
const SolutionsHub = lazy(() => import('./pages/SolutionsHub'));
const BigData = lazy(() => import('./pages/solutions/BigData'));
const AIML = lazy(() => import('./pages/solutions/AIML'));
const QuantumIntegration = lazy(() => import('./pages/solutions/QuantumIntegration'));
const TechnologyHub = lazy(() => import('./pages/TechnologyHub'));
const ProductsHub = lazy(() => import('./pages/ProductsHub'));
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
const QRATWebinar = lazy(() => import('./pages/QRATWebinar'));
const PitchDeck = lazy(() => import('./pages/PitchDeck'));
const PitchDeckA = lazy(() => import('./pages/PitchDeckA'));
const ROICalculator = lazy(() => import('./pages/ROICalculator'));
const OnePager = lazy(() => import('./pages/OnePager'));
const Hardware = lazy(() => import('./pages/Hardware'));
const Healthcare = lazy(() => import('./pages/Healthcare'));
const HealthcareWorkshop = lazy(() => import('./pages/HealthcareWorkshop'));
const BlogHub = lazy(() => import('./pages/BlogHub'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const BlogList = lazy(() => import('./pages/admin/BlogList'));
const BlogEditor = lazy(() => import('./pages/admin/BlogEditor'));
const Submissions = lazy(() => import('./pages/admin/Submissions'));
const TechnologyList = lazy(() => import('./pages/admin/TechnologyList'));
const TechnologyEditor = lazy(() => import('./pages/admin/TechnologyEditor'));

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
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/qrat-webinar" element={<QRATWebinar />} />
          <Route path="/healthcare-workshop" element={<HealthcareWorkshop />} />
          <Route path="/pitch-deck" element={<PitchDeck />} />
          <Route path="/pitch-deck-a" element={<PitchDeckA />} />
          <Route path="/roicalc" element={<ROICalculator />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/new" element={<BlogEditor />} />
                    <Route path="/blog/edit/:id" element={<BlogEditor />} />
                    <Route path="/submissions" element={<Submissions />} />
                    <Route path="/technologies" element={<TechnologyList />} />
                    <Route path="/technologies/new" element={<TechnologyEditor />} />
                    <Route path="/technologies/edit/:id" element={<TechnologyEditor />} />
                    <Route path="/media" element={<div className="text-white">Media library coming soon</div>} />
                    <Route path="/settings" element={<div className="text-white">Settings coming soon</div>} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-slate-950 text-white">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hospital-roi" element={<HospitalROI />} />
                    <Route path="/solutions" element={<SolutionsHub />} />
                    <Route path="/solutions/big-data" element={<BigData />} />
                    <Route path="/solutions/ai-ml" element={<AIML />} />
                    <Route path="/solutions/quantum-integration" element={<QuantumIntegration />} />
                    <Route path="/tech" element={<TechnologyHub />} />
                    <Route path="/products" element={<ProductsHub />} />
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
                    <Route path="/blog" element={<BlogHub />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/one-pager" element={<OnePager />} />
                    <Route path="/hardware" element={<Hardware />} />
                    <Route path="/healthcare" element={<Healthcare />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
