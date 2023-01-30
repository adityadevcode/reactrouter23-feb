// regular user will not enter link to access application like home aboutus
// we need to use UI Elment link (Click to different route)
// navigating to different routes using an element in the UI
// NAVBAR COMPONENT HOME about appform reachus, when we click on this we access 4 components
// to navigate to another route react provided link component
// user expercience active link
//reacter router provides another feature nav link, whether it is active link or not
// navlink component is specifically meant to build component navbar or breadcrumbs to highlight current select item and 
// and useful content for screen readers
//upto now we have followed different approches how to navigate different routes using link and nav link components
//  some time we need to programatically route to particular route 
// example: placing an order in amazon if form sumbission is successful(We will be navigated to order confirmation page)
// this is scenario is used form submission 
//we are implmenting button click handler we programmatically navigate to different route application 




import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import ApplicationForm from "./Components/ApplicationForm";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import Reachus from "./Components/Reachus";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* we are defining individual routes */}
        {/* on the route we specifiy 2 props first one which reflect path in url */}
        {/* what element need to render when url matches this path (here home component)  */}
        {/* localhost:300o is / (home component) */}
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="ApplicationForm" element={<ApplicationForm />}></Route>
        <Route path="Reachus" element={<Reachus />}></Route>
        <Route path="OrderSummary" element={<OrderSummary/>}></Route>

      </Routes>
    </>
  );
}

export default App;
