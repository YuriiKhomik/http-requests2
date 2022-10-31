// const BASE_URL = 'https://restcountries.com/v3.1/name'

// export function fetchCountries(name) {
    
//     const url = `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     return [];
//                 };
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
// };

// const BASE_URL = 'https://restcountries.com/v3.1/name'

// export function fetchCountries(name) {
    
//     const url = `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(url)
//         .then(response => {
//             if (response.status === 404) {
//                     return [];
//             }
//             return response.json();
//         })
//         .catch(error => {
//             throw new Error(response.status)
//         })
// };

// const BASE_URL = 'https://restcountries.com/v3.1/name'

// export function fetchCountries(name) {
    
//     const url = `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(url)
//         .then(response => {
//             if (response.status === 404) {
//                     return [];
//             }
//             return response.json();
//         })
//         .catch(error => {
//             throw new Error(response.status)
//         })
// };