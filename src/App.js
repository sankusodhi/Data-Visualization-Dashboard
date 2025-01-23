
// import React from 'react';
// import BarChart from './Components/BarChart';
// import LineChart from './Components/LineChart';
// import Filters from './Components/Filters';
// function App() {
//     return (
//         <div className="bg-[#FAF6F0] overflow-x-hidden">
//             <BarChart />
//             <LineChart />
//             <Filters />
//         </div>
//     );
// }

// export default App;


// import React from 'react';
// import Navbar from './Components/Navbar';
// import BarChart from './Components/BarChart';
// import LineChart from './Components/LineChart';
// import Filters from './Components/Filters';

// function App() {
//     return (
//         <div className="bg-[#FAF6F0] overflow-x-hidden">
//             <Navbar />
//             <div id="bar-chart">
//                 <BarChart />
//             </div>
//             <div id="line-chart">
//                 <LineChart />
//             </div>
//             <div id="filters">
//                 <Filters />
//             </div>
//         </div>
//     );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import BarChart from './Components/BarChart';
// import LineChart from './Components/LineChart';
// import Filters from './Components/Filters';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';

// function App() {
//     return (
//         <Router>
//             <div className="bg-[#FAF6F0] overflow-x-hidden">
//                 <Navbar />
//                 <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<SignUp />} />
//                     <Route path="/" element={
//                         <>
//                             <div id="bar-chart">
//                                 <BarChart />
//                             </div>
//                             <div id="line-chart">
//                                 <LineChart />
//                             </div>
//                             <div id="filters">
//                                 <Filters />
//                             </div>
//                         </>
//                     } />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import BarChart from "./Components/BarChart";
// import LineChart from "./Components/LineChart";
// import Filters from "./Components/Filters";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user login status

//   return (
//     <Router>
//       <div className="bg-[#FAF6F0] overflow-x-hidden">
//         {/* Navbar */}
//         <Navbar />

//         {/* Routes */}
//         <Routes>
//           {/* Route for Sign Up */}
//           <Route path="/signup" element={<SignUp />} />

//           {/* Route for Login */}
//           <Route
//             path="/login"
//             element={<Login setIsAuthenticated={setIsAuthenticated} />}
//           />

//           {/* Protected Home Route */}
//           <Route
//             path="/"
//             element={
//               isAuthenticated ? (
//                 <>
//                   <div id="bar-chart">
//                     <BarChart />
//                   </div>
//                   <div id="line-chart">
//                     <LineChart />
//                   </div>
//                   <div id="filters">
//                     <Filters />
//                   </div>
//                 </>
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import Filters from './Components/Filters';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Contact from './Components/Contact';  // Import Contact component

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user login status

    return (
        <Router>
            <div className="bg-[#FAF6F0] overflow-x-hidden">
                <Navbar />
                <Routes>
                    {/* Route for SignUp */}
                    <Route path="/signup" element={<SignUp />} />
                    
                    {/* Route for Login */}
                    <Route 
                        path="/login" 
                        element={<Login setIsAuthenticated={setIsAuthenticated} />} 
                    />
                    
                    {/* Protected Home Route */}
                    <Route 
                        path="/" 
                        element={
                            isAuthenticated ? (
                                <>
                                    <div id="bar-chart">
                                        <BarChart />
                                    </div>
                                    <div id="line-chart">
                                        <LineChart />
                                    </div>
                                    <div id="filters">
                                        <Filters />
                                    </div>
                                </>
                            ) : (
                                <Navigate to="/login" replace />
                            )
                        } 
                    />

                    {/* Route for Contact */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
