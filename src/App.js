
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


import React from 'react';
import Navbar from './Components/Navbar';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import Filters from './Components/Filters';

function App() {
    return (
        <div className="bg-[#FAF6F0] overflow-x-hidden">
            <Navbar />
            <div id="bar-chart">
                <BarChart />
            </div>
            <div id="line-chart">
                <LineChart />
            </div>
            <div id="filters">
                <Filters />
            </div>
        </div>
    );
}

export default App;
