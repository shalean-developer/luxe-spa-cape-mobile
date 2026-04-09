import type { ComponentType } from "react";
import Services from "@/site-pages/Services";
import About from "@/site-pages/About";
import Contact from "@/site-pages/Contact";
import Booking from "@/site-pages/Booking";
import Terms from "@/site-pages/Terms";
import Locations from "@/site-pages/Locations";
import Blog from "@/site-pages/Blog";
import CampsBay from "@/site-pages/locations/CampsBay";
import Clifton from "@/site-pages/locations/Clifton";
import Llandudno from "@/site-pages/locations/Llandudno";
import HoutBay from "@/site-pages/locations/HoutBay";
import Constantia from "@/site-pages/locations/Constantia";
import Bishopscourt from "@/site-pages/locations/Bishopscourt";
import Fresnaye from "@/site-pages/locations/Fresnaye";
import BantryBay from "@/site-pages/locations/BantryBay";
import SeaPoint from "@/site-pages/locations/SeaPoint";
import GreenPoint from "@/site-pages/locations/GreenPoint";
import Newlands from "@/site-pages/locations/Newlands";
import Claremont from "@/site-pages/locations/Claremont";
import Rondebosch from "@/site-pages/locations/Rondebosch";
import SomersetWest from "@/site-pages/locations/SomersetWest";
import Stellenbosch from "@/site-pages/locations/Stellenbosch";
import Tokai from "@/site-pages/locations/Tokai";
import Goodwood from "@/site-pages/locations/Goodwood";
import Higgovale from "@/site-pages/locations/Higgovale";
import Oranjezicht from "@/site-pages/locations/Oranjezicht";
import Tamboerskloof from "@/site-pages/locations/Tamboerskloof";
import Gardens from "@/site-pages/locations/Gardens";
import DeWaterkant from "@/site-pages/locations/DeWaterkant";
import MouillePoint from "@/site-pages/locations/MouillePoint";
import Franschhoek from "@/site-pages/locations/Franschhoek";
import Paarl from "@/site-pages/locations/Paarl";
import Durbanville from "@/site-pages/locations/Durbanville";
import Bloubergstrand from "@/site-pages/locations/Bloubergstrand";

export const routeComponentMap: Record<string, ComponentType> = {
  services: Services,
  locations: Locations,
  blog: Blog,
  about: About,
  contact: Contact,
  booking: Booking,
  terms: Terms,
  "locations/camps-bay": CampsBay,
  "locations/clifton": Clifton,
  "locations/llandudno": Llandudno,
  "locations/hout-bay": HoutBay,
  "locations/constantia": Constantia,
  "locations/bishopscourt": Bishopscourt,
  "locations/fresnaye": Fresnaye,
  "locations/bantry-bay": BantryBay,
  "locations/sea-point": SeaPoint,
  "locations/green-point": GreenPoint,
  "locations/newlands": Newlands,
  "locations/claremont": Claremont,
  "locations/rondebosch": Rondebosch,
  "locations/somerset-west": SomersetWest,
  "locations/stellenbosch": Stellenbosch,
  "locations/tokai": Tokai,
  "locations/goodwood": Goodwood,
  "locations/higgovale": Higgovale,
  "locations/oranjezicht": Oranjezicht,
  "locations/tamboerskloof": Tamboerskloof,
  "locations/gardens": Gardens,
  "locations/de-waterkant": DeWaterkant,
  "locations/mouille-point": MouillePoint,
  "locations/franschhoek": Franschhoek,
  "locations/paarl": Paarl,
  "locations/durbanville": Durbanville,
  "locations/bloubergstrand": Bloubergstrand,
};
