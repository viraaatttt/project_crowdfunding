import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Web3Provider } from "./context/Web3Context";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import CampaignsPage from "./pages/CampaignsPage";
import CampaignDetailPage from "./pages/CampaignDetailPage";
import CreateCampaignPage from "./pages/CreateCampaignPage";
import DashboardPage from "./pages/DashboardPage";
import HowItWorksPage from "./pages/HowItWorksPage";

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/campaign/:id" element={<CampaignDetailPage />} />
              <Route path="/create" element={<CreateCampaignPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;