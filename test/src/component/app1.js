document.write('<div id="M_qrcode"></div>')
var M_qrcode = document.getElementById('M_qrcode')
console.log('ffffff')

var qrcode = new QRCode(document.getElementById("M_qrcode"), {
	width : 100,
	height : 100
});
qrcode.makeCode('http://localhost:3000/scan');

// var sid = window.setInterval(function () {
//     console.log('fff')

//     axios.get('/user?ID=12345')
//         .then(function (response) {
//             // handle success
//             if (response.data === 'scaned') {
//                 M_qrcode.innerHTML = response.data
//             }
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .finally(function () {
//             // always executed
//         });

// }, 1000)