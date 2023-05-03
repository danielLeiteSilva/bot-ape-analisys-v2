// const request = require('request')

// async function getPostalCode(address) {
//     return new Promise((resolve) => {
//         try {
//             request.get(encodeURI(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`), (error, response, body) => {
//                 if (!error) {
//                     if (response.statusCode === 200) {
//                         const location  = JSON.parse(body)['results'][0]["address_components"].filter(element => element['types'][0] === "postal_code")
//                         resolve({ message: location[0]['long_name'], code: response.statusCode })
//                     } else {
//                         resolve({ message: "Not possible resolve request", code: response.statusCode })
//                     }
//                 } else {
//                     resolve({ message: error, code: response.statusCode })
//                 }
//             })

//         } catch (Exception) {
//             resolve({ message: Exception, code: 404 })
//         }
//     })
// }


// // // async function latLong(address) {
// // //     return new Promise((resolve) => {
// // //         try {
// // //             request.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
// // //                 if (!error) {
// // //                     if (response.statusCode === 200) {
// // //                         const { location } = JSON.parse(body)['results'][0]['geometry']

// // //                         resolve({ message: location, code: response.statusCode })
// // //                     } else {
// // //                         resolve({ message: "Not possible resolve request", code: response.statusCode })
// // //                     }
// // //                 } else {
// // //                     resolve({ message: error, code: response.statusCode })
// // //                 }
// // //             })

// // //         } catch (Exception) {
// // //             resolve({ message: Exception, code: 404 })
// // //         }
// // //     })
// // // }


// // // async function markets(geometry) {
// // //     return new Promise((resolve) => {
// // //         try {
// // //             request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geometry.lat},${geometry.lng}&radius=1000&type=supermarket&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
// // //                 if (!error) {
// // //                     if (response.statusCode === 200) {
// // //                         const response = JSON.parse(body)

// // //                         resolve({ message: response, code: response.statusCode })
// // //                     } else {
// // //                         resolve({ message: "Not possible resolve request", code: response.statusCode })
// // //                     }
// // //                 } else {
// // //                     resolve({ message: error, code: response.statusCode })
// // //                 }
// // //             })

// // //         } catch (Exception) {
// // //             resolve({ message: Exception, code: 404 })
// // //         }
// // //     })
// // // }


// // // latLong("'Rua Gastão da Cunha - Vila Paulista - São Paulo, SP").then(response => {
// // //     markets(response["message"]).then(res => {
// // //         let supermarkets = ""
// // //         res["message"]["results"].map(results => {
// // //             supermarkets = supermarkets += results.name + "\n"
// // //         })

// // //         console.log(supermarkets)
// // //     })
// // // })


// // async function latLong(address) {
// //     return new Promise((resolve) => {
// //         try {
// //             request.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBUdnRFDvnIE2TKUMH9xIU1ti40mG4jJl0`, (error, response, body) => {
// //                 if (!error) {
// //                     if (response.statusCode === 200) {
// //                         const { location } = JSON.parse(body)['results'][0]['geometry']
// //                         const coordinates = { latitude: location.lat, longitude: location.lng }
// //                         resolve({ message: coordinates, code: response.statusCode })
// //                     } else {
// //                         resolve({ message: "Not possible resolve request", code: response.statusCode })
// //                     }
// //                 } else {
// //                     resolve({ message: error, code: response.statusCode })
// //                 }
// //             })

// //         } catch (Exception) {
// //             resolve({ message: Exception, code: 404 })
// //         }
// //     })
// // }

// // latLong("04849-552")
// // .then(response => {
// //     console.log(response['message'])
// // })
// // .catch(error => {
// //     console.log(error)
// // })
// // // var atual = "600000,00";
// // // var valor = parseFloat(atual)
// // // atual = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

// // // console.log(atual)