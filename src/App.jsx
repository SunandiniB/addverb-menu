// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// Create a wrapper function to handle the generic PageName export
const createPageComponent = (importFunc) => {
  const Component = lazy(async () => {
    const module = await importFunc();
    // Return the default export (which is PageName) as the component
    return { default: module.default };
  });
  return Component;
};

// Core Pages
const Home = createPageComponent(() => import("./pages/Home"));
const Service = createPageComponent(() => import("./pages/Service"));

// Industry Pages
const IndustryMainPage = createPageComponent(() => import("./pages/Industry/IndustryMainPage"));
const AutomotiveandTyre = createPageComponent(() => import("./pages/Industry/AutomotiveandTyre"));
const ChemicalsandPetrochemicals = createPageComponent(() => import("./pages/Industry/ChemicalsandPetrochemicals"));
const ColdStorage = createPageComponent(() => import("./pages/Industry/ColdStorage"));
const ConsumerGoods = createPageComponent(() => import("./pages/Industry/ConsumerGoods"));
const ECommerce = createPageComponent(() => import("./pages/Industry/ECommerce"));
const Fashion = createPageComponent(() => import("./pages/Industry/Fashion"));
const Grocery = createPageComponent(() => import("./pages/Industry/Grocery"));
const Pharmaceuticals = createPageComponent(() => import("./pages/Industry/Pharmaceuticals"));
const Semiconductors = createPageComponent(() => import("./pages/Industry/Semiconductors"));
const SolarandBattery = createPageComponent(() => import("./pages/Industry/SolarandBattery"));
const ThirdPartyLogistics = createPageComponent(() => import("./pages/Industry/ThirdPartyLogistics"));

// Solutions Main Pages
const SolutionsMainPage = createPageComponent(() => import("./pages/Solutions/SolutionsMainPage"));
const FunctionalityMainPage = createPageComponent(() => import("./pages/Solutions/Functionality/FunctionalityMainPage"));

// Solutions Functionality Pages
const MaterialMovement = createPageComponent(() => import("./pages/Solutions/Functionality/MaterialMovement"));
const Picking = createPageComponent(() => import("./pages/Solutions/Functionality/Picking"));
const ReverseLogistics = createPageComponent(() => import("./pages/Solutions/Functionality/ReverseLogistics"));
const Sortation = createPageComponent(() => import("./pages/Solutions/Functionality/Sortation"));
const Storage = createPageComponent(() => import("./pages/Solutions/Functionality/Storage"));

// Products Main Pages
const ProductsMainPage = createPageComponent(() => import("./pages/Solutions/Products/ProductsMainPage"));

// ASRS Pages
const CartonShuttle = createPageComponent(() => import("./pages/Solutions/Products/ASRS/CartonShuttle"));
const CraneASRS = createPageComponent(() => import("./pages/Solutions/Products/ASRS/CraneASRS"));
const FourWayPalletShuttle = createPageComponent(() => import("./pages/Solutions/Products/ASRS/FourWayPalletShuttle"));
const MotherChildShuttle = createPageComponent(() => import("./pages/Solutions/Products/ASRS/MotherChildShuttle"));
const MultiLevelShuttle = createPageComponent(() => import("./pages/Solutions/Products/ASRS/MultiLevelShuttle"));
const PalletShuttle = createPageComponent(() => import("./pages/Solutions/Products/ASRS/PalletShuttle"));

// Mobile Robots Pages
const AutonomousForklift = createPageComponent(() => import("./pages/Solutions/Products/MobileRobots/AutonomousForklift"));
const AutonomousMobileRobot = createPageComponent(() => import("./pages/Solutions/Products/MobileRobots/AutonomousMobileRobot"));
const MultiCartonPickingRobot = createPageComponent(() => import("./pages/Solutions/Products/MobileRobots/MultiCartonPickingRobot"));
const RailGuidedRobot = createPageComponent(() => import("./pages/Solutions/Products/MobileRobots/RailGuidedRobot"));

// Picking Systems Pages
const HorizontalCarousel = createPageComponent(() => import("./pages/Solutions/Products/PickingSystems/HorizontalCarousel"));
const PicktoLight = createPageComponent(() => import("./pages/Solutions/Products/PickingSystems/PicktoLight"));

// Software Pages
const FleetManagementSystem = createPageComponent(() => import("./pages/Solutions/Products/Software/FleetManagementSystem"));
const WarehouseControlSystem = createPageComponent(() => import("./pages/Solutions/Products/Software/WarehouseControlSystem"));
const WarehouseExecutionSystem = createPageComponent(() => import("./pages/Solutions/Products/Software/WarehouseExecutionSystem"));
const WarehouseManagementSoftware = createPageComponent(() => import("./pages/Solutions/Products/Software/WarehouseManagementSoftware"));

// Sorting Robots Pages
const RoboticSorter = createPageComponent(() => import("./pages/Solutions/Products/SortingRobots/RoboticSorter"));
const VerticalSortationRobot = createPageComponent(() => import("./pages/Solutions/Products/SortingRobots/VerticalSortationRobot"));

// Company Pages
const AboutUs = createPageComponent(() => import("./pages/Company/AboutUs"));
const Careers = createPageComponent(() => import("./pages/Company/Careers"));
const Partners = createPageComponent(() => import("./pages/Company/Partners"));

// NewsRoom Pages
const NewsRoomMainPage = createPageComponent(() => import("./pages/NewsRoom/NewsRoomMainPage"));
const Blogs = createPageComponent(() => import("./pages/NewsRoom/Blogs"));
const CaseStudies = createPageComponent(() => import("./pages/NewsRoom/CaseStudies"));
const Events = createPageComponent(() => import("./pages/NewsRoom/Events"));
const News = createPageComponent(() => import("./pages/NewsRoom/News"));
const Podcasts = createPageComponent(() => import("./pages/NewsRoom/Podcasts"));
const Sustainability = createPageComponent(() => import("./pages/NewsRoom/Sustainability"));
const Whitepapers = createPageComponent(() => import("./pages/NewsRoom/Whitepapers"));

// BottomBar Pages
const Blog = createPageComponent(() => import("./pages/BottomBar/Blog"));
const Enquire = createPageComponent(() => import("./pages/BottomBar/Enquire"));
const Support = createPageComponent(() => import("./pages/BottomBar/Support"));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center text-white text-xl">
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Core */}
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />

            {/* Industry */}
            <Route path="/industry" element={<IndustryMainPage />} />
            <Route path="/industry/automotiveandtyre" element={<AutomotiveandTyre />} />
            <Route path="/industry/chemicalsandpetrochemicals" element={<ChemicalsandPetrochemicals />} />
            <Route path="/industry/coldstorage" element={<ColdStorage />} />
            <Route path="/industry/consumergoods" element={<ConsumerGoods />} />
            <Route path="/industry/ecommerce" element={<ECommerce />} />
            <Route path="/industry/fashion" element={<Fashion />} />
            <Route path="/industry/grocery" element={<Grocery />} />
            <Route path="/industry/pharmaceuticals" element={<Pharmaceuticals />} />
            <Route path="/industry/semiconductors" element={<Semiconductors />} />
            <Route path="/industry/solarandbattery" element={<SolarandBattery />} />
            <Route path="/industry/thirdpartylogistics" element={<ThirdPartyLogistics />} />

            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsMainPage />} />
            <Route path="/solutions/functionality" element={<FunctionalityMainPage />} />
            <Route path="/solutions/functionality/materialmovement" element={<MaterialMovement />} />
            <Route path="/solutions/functionality/picking" element={<Picking />} />
            <Route path="/solutions/functionality/reverselogistics" element={<ReverseLogistics />} />
            <Route path="/solutions/functionality/sortation" element={<Sortation />} />
            <Route path="/solutions/functionality/storage" element={<Storage />} />

            {/* Products */}
            <Route path="/products" element={<ProductsMainPage />} />

            {/* ASRS */}
            <Route path="/products/asrs/cartonshuttle" element={<CartonShuttle />} />
            <Route path="/products/asrs/craneasrs" element={<CraneASRS />} />
            <Route path="/products/asrs/4waypalletshuttle" element={<FourWayPalletShuttle />} />
            <Route path="/products/asrs/motherchildshuttle" element={<MotherChildShuttle />} />
            <Route path="/products/asrs/multilevelshuttle" element={<MultiLevelShuttle />} />
            <Route path="/products/asrs/palletshuttle" element={<PalletShuttle />} />

            {/* Mobile Robots */}
            <Route path="/products/mobilerobots/autonomousforklift" element={<AutonomousForklift />} />
            <Route path="/products/mobilerobots/autonomousmobilerobot" element={<AutonomousMobileRobot />} />
            <Route path="/products/mobilerobots/multicartonpickingrobot" element={<MultiCartonPickingRobot />} />
            <Route path="/products/mobilerobots/railguidedrobot" element={<RailGuidedRobot />} />

            {/* Picking Systems */}
            <Route path="/products/pickingsystems/horizontalcarousel" element={<HorizontalCarousel />} />
            <Route path="/products/pickingsystems/picktolight" element={<PicktoLight />} />

            {/* Software */}
            <Route path="/products/software/fleetmanagementsystem" element={<FleetManagementSystem />} />
            <Route path="/products/software/warehousecontrolsystem" element={<WarehouseControlSystem />} />
            <Route path="/products/software/warehouseexecutionsystem" element={<WarehouseExecutionSystem />} />
            <Route path="/products/software/warehousemanagementsoftware" element={<WarehouseManagementSoftware />} />

            {/* Sorting Robots */}
            <Route path="/products/sortingrobots/roboticsorter" element={<RoboticSorter />} />
            <Route path="/products/sortingrobots/verticalsortationrobot" element={<VerticalSortationRobot />} />

            {/* Company */}
            <Route path="/company/aboutus" element={<AboutUs />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/partners" element={<Partners />} />

            {/* NewsRoom */}
            <Route path="/newsroom" element={<NewsRoomMainPage />} />
            <Route path="/newsroom/blogs" element={<Blogs />} />
            <Route path="/newsroom/casestudies" element={<CaseStudies />} />
            <Route path="/newsroom/events" element={<Events />} />
            <Route path="/newsroom/news" element={<News />} />
            <Route path="/newsroom/podcasts" element={<Podcasts />} />
            <Route path="/newsroom/sustainability" element={<Sustainability />} />
            <Route path="/newsroom/whitepapers" element={<Whitepapers />} />

            {/* BottomBar */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="/support" element={<Support />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center text-white text-3xl">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;