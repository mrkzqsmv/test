//I CREATE ONE SERVICE FUNCTION FOR REQUEST.

//I IMPORT END_POINTS TO THIS FILE.
const endpoints = require('./endPoints');

const fetchAPI = (apiURL) => {
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
}

//FIRST API FETCH
// fetchAPI(endpoints.firstBaseURL)

//SECOND API FETCH
// fetchAPI(endpoints.secondBaseURL)

//THIRD API FETCH
// fetchAPI(endpoints.thirdBaseURL)

//FOURTH API FETCH
// fetchAPI(endpoints.fourthBaseURL)

//FITTH API FETCH
// fetchAPI(endpoints.fifthBaseURL)

//SIXTH API FETCH
// fetchAPI(endpoints.sixthBaseURL)

//SEVENTH API FETCH
// fetchAPI(endpoints.seventhBaseURL)

//EIGHTH API FETCH
// fetchAPI(endpoints.eighthBaseURL)

//NINTH API FETCH
// fetchAPI(endpoints.ninthBaseURL)

//TENTH API FETCH
// fetchAPI(endpoints.tenthBaseURL)