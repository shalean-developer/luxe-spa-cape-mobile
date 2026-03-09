import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Terms from "./pages/Terms";
import Locations from "./pages/Locations";
import Blog from "./pages/Blog";
import CampsBay from "./pages/locations/CampsBay";
import Clifton from "./pages/locations/Clifton";
import Llandudno from "./pages/locations/Llandudno";
import HoutBay from "./pages/locations/HoutBay";
import Constantia from "./pages/locations/Constantia";
import Bishopscourt from "./pages/locations/Bishopscourt";
import Fresnaye from "./pages/locations/Fresnaye";
import BantryBay from "./pages/locations/BantryBay";
import SeaPoint from "./pages/locations/SeaPoint";
import GreenPoint from "./pages/locations/GreenPoint";
import Newlands from "./pages/locations/Newlands";
import Claremont from "./pages/locations/Claremont";
import Rondebosch from "./pages/locations/Rondebosch";
import SomersetWest from "./pages/locations/SomersetWest";
import Stellenbosch from "./pages/locations/Stellenbosch";
import Tokai from "./pages/locations/Tokai";
import Goodwood from "./pages/locations/Goodwood";
import Higgovale from "./pages/locations/Higgovale";
import Oranjezicht from "./pages/locations/Oranjezicht";
import Tamboerskloof from "./pages/locations/Tamboerskloof";
import Gardens from "./pages/locations/Gardens";
import DeWaterkant from "./pages/locations/DeWaterkant";
import MouillePoint from "./pages/locations/MouillePoint";
import Franschhoek from "./pages/locations/Franschhoek";
import Paarl from "./pages/locations/Paarl";
import Durbanville from "./pages/locations/Durbanville";
import Bloubergstrand from "./pages/locations/Bloubergstrand";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/locations/camps-bay" element={<CampsBay />} />
              <Route path="/locations/clifton" element={<Clifton />} />
              <Route path="/locations/llandudno" element={<Llandudno />} />
              <Route path="/locations/hout-bay" element={<HoutBay />} />
              <Route path="/locations/constantia" element={<Constantia />} />
              <Route path="/locations/bishopscourt" element={<Bishopscourt />} />
              <Route path="/locations/fresnaye" element={<Fresnaye />} />
              <Route path="/locations/bantry-bay" element={<BantryBay />} />
              <Route path="/locations/sea-point" element={<SeaPoint />} />
              <Route path="/locations/green-point" element={<GreenPoint />} />
              <Route path="/locations/newlands" element={<Newlands />} />
              <Route path="/locations/claremont" element={<Claremont />} />
              <Route path="/locations/rondebosch" element={<Rondebosch />} />
              <Route path="/locations/somerset-west" element={<SomersetWest />} />
              <Route path="/locations/stellenbosch" element={<Stellenbosch />} />
              <Route path="/locations/tokai" element={<Tokai />} />
              <Route path="/locations/goodwood" element={<Goodwood />} />
              <Route path="/locations/higgovale" element={<Higgovale />} />
              <Route path="/locations/oranjezicht" element={<Oranjezicht />} />
              <Route path="/locations/tamboerskloof" element={<Tamboerskloof />} />
              <Route path="/locations/gardens" element={<Gardens />} />
              <Route path="/locations/de-waterkant" element={<DeWaterkant />} />
              <Route path="/locations/mouille-point" element={<MouillePoint />} />
              <Route path="/locations/franschhoek" element={<Franschhoek />} />
              <Route path="/locations/paarl" element={<Paarl />} />
              <Route path="/locations/durbanville" element={<Durbanville />} />
              <Route path="/locations/bloubergstrand" element={<Bloubergstrand />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
