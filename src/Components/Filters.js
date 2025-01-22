
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Filters = ({ setChartData }) => {
//     const [ageRange, setAgeRange] = useState('');
//     const [gender, setGender] = useState('');
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null );
//     const [data, setData] = useState([]);

//     // Fetch data from Google Sheets
//     useEffect(() => {
//         const fetchData = async () => {
//             const SPREADSHEET_ID = '1l7GstWHc69HPV0irSdvoMIyHgtufUPKsbtCiNw7IKR0';
//             const SHEET_NAME = 'Sheet1'; 
//             const API_KEY = 'AIzaSyD8x0f_alUcQ03HrhNLMCp0eSJEqGNn3SA';

//             const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
//             try {
//                 const response = await axios.get(url);
//                 const rows = response.data.values;
//                 const formattedData = rows.slice(1).map((row) => ({
//                     age: parseInt(row[0]), 
//                     gender: row[1],
//                     date: row[2],
//                     value: parseInt(row[3]),
//                 }));
//                 setData(formattedData);
//                 setChartData(formattedData); 
//             } catch (error) {
//                 console.error('Error fetching data from Google Sheets:', error);
//             }
//         };

//         fetchData();
//     }, [setChartData]);

//     const handleFilterChange = () => {
//         const filteredData = data.filter((item) => {
//             const matchesAge =
//                 ageRange === ''
//                     ? true
//                     : ageRange === '15-25'
//                     ? item.age >= 15 && item.age <= 25
//                     : item.age > 25;

//             const matchesGender = gender === '' ? true : item.gender === gender;

//             const matchesDate =
//                 (!startDate || new Date(item.date) >= new Date(startDate)) &&
//                 (!endDate || new Date(item.date) <= new Date(endDate));

//             return matchesAge && matchesGender && matchesDate;
//         });

//         setChartData(filteredData); 
//     };

//     return (
//         <div style={styles.container}>
//             <h3 style={styles.heading}>Filters</h3>
//             <div style={styles.filterGroup}>
//                 <label style={styles.label}>Age Range:</label>
//                 <select
//                     value={ageRange}
//                     onChange={(e) => setAgeRange(e.target.value)}
//                     style={styles.select}
//                 >
//                     <option value="">All</option>
//                     <option value="15-25">15-25</option>
//                     <option value=">25">25+</option>
//                 </select>
//             </div>
//             <div style={styles.filterGroup}>
//                 <label style={styles.label}>Gender:</label>
//                 <select
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     style={styles.select}
//                 >
//                     <option value="">All</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                 </select>
//             </div>
//             <div style={styles.filterGroup}>
//                 <label style={styles.label}>Date Range:</label>
//                 <div style={styles.datePickerContainer}>
//                     <DatePicker
//                         selected={startDate}
//                         onChange={(date) => setStartDate(date)}
//                         placeholderText="Start Date"
//                     />
//                     <DatePicker
//                         selected={endDate}
//                         onChange={(date) => setEndDate(date)}
//                         placeholderText="End Date"
//                     />
//                 </div>
//             </div>
//             <button onClick={handleFilterChange} style={styles.button}>
//                 Apply Filters
//             </button>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         backgroundColor: '#f8f9fa',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         maxWidth: '400px',
//         margin: '0 auto',
//         fontFamily: 'Arial, sans-serif',
//     },
//     heading: {
//         fontSize: '1.5rem',
//         color: '#333',
//         textAlign: 'center',
//         marginBottom: '20px',
//     },
//     filterGroup: {
//         marginBottom: '15px',
//     },
//     label: {
//         fontSize: '1rem',
//         color: '#555',
//         marginRight: '10px',
//         display: 'inline-block',
//         width: '100px',
//     },
//     select: {
//         width: 'calc(100% - 120px)',
//         padding: '8px',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         fontSize: '1rem',
//     },
//     datePickerContainer: {
//         display: 'flex',
//         gap: '10px',
//     },
//     button: {
//         width: '100%',
//         padding: '10px',
//         fontSize: '1rem',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         marginTop: '10px',
//     },
// };

// export default Filters;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ setChartData = () => {} }) => {
    const [ageRange, setAgeRange] = useState('');
    const [gender, setGender] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState([]);

    // Fetch data from Google Sheets
    useEffect(() => {
        // const fetchData = async () => {
        //     const SPREADSHEET_ID = '1l7GstWHc69HPV0irSdvoMIyHgtufUPKsbtCiNw7IKR0';
        //     const SHEET_NAME = 'Sheet1'; 
        //     const API_KEY = 'AIzaSyD8x0f_alUcQ03HrhNLMCp0eSJEqGNn3SA';

        //     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
        //     try {
        //         const response = await axios.get(url);
        //         const rows = response.data.values;
        //         const formattedData = rows.slice(1).map((row) => {
        //             const age = parseInt(row[0]);
        //             const gender = row[1];
        //             const date = row[2];
        //             const value = parseInt(row[3]);
        //             if (isNaN(age) || !gender || isNaN(value) || !date) {
        //                 console.warn('Invalid data row:', row);
        //                 return null;
        //             }
        //             return { age, gender, date, value };
        //         }).filter(Boolean); 

        //         setData(formattedData);
        //         setChartData(formattedData);
        //     } catch (error) {
        //         console.error('Error fetching data from Google Sheets:', error);
        //     }
        // };
        const fetchData = async () => {
            // const SPREADSHEET_ID = '1hrwkm0kzSELgVSfei6XxTNcZdaseFDtriWy_OKgYqNQ';
            const SPREADSHEET_ID = '1hrwkm0kzSELgVSfei6XxTNcZdaseFDtriWy_OKgYqNQ';
            // const SHEET_NAME = 'Frontend Developer Assignment Data - Sheet3'; 
            const SHEET_NAME = 'Frontend Developer Assignment Data - Sheet3';
            const API_KEY = 'AIzaSyBeId6BFKN457o5rMXyY9uKHNSbeklglSA';
        
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
            try {
                const response = await axios.get(url);
                console.log('Full API Response:', response);
                console.log('Data Values:', response.data.values);
        
                const rows = response.data.values || [];
                const formattedData = rows.slice(1).map((row) => ({
                    age: parseInt(row[0]),
                    gender: row[1],
                    date: row[2],
                    value: parseInt(row[3]),
                }));
        
                setData(formattedData);
                setChartData(formattedData);
            } catch (error) {
                // console.error('Error fetching data:', error.message);
                console.log('Fetching data from URL:', url);

            }
       
        };
        
        fetchData();
    }, [setChartData]);
    const handleFilterChange = () => {
        const filteredData = data.filter((item) => {
            const matchesAge =
                ageRange === ''
                    ? true
                    : ageRange === '15-25'
                    ? item.age >= 15 && item.age <= 25
                    : item.age > 25;

            const matchesGender = gender === '' ? true : item.gender === gender;

            const matchesDate =
                (!startDate || new Date(item.date) >= new Date(startDate)) &&
                (!endDate || new Date(item.date) <= new Date(endDate));

            return matchesAge && matchesGender && matchesDate;
        });

        setChartData(filteredData);
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Filters</h3>
            <div style={styles.filterGroup}>
                <label style={styles.label}>Age Range:</label>
                <select
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    style={styles.select}
                >
                    <option value="">All</option>
                    <option value="15-25">15-25</option>
                    <option value=">25">25+</option>
                </select>
            </div>
            <div style={styles.filterGroup}>
                <label style={styles.label}>Gender:</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={styles.select}
                >
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div style={styles.filterGroup}>
                <label style={styles.label}>Date Range:</label>
                <div style={styles.datePickerContainer}>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Start Date"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="End Date"
                    />
                </div>
            </div>
            <button onClick={handleFilterChange} style={styles.button}>
                Apply Filters
            </button>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '1.5rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
    filterGroup: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '1rem',
        color: '#555',
        marginRight: '10px',
        display: 'inline-block',
        width: '100px',
    },
    select: {
        width: 'calc(100% - 120px)',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
    },
    datePickerContainer: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Filters;
