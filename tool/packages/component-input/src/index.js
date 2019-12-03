const id = window.token;
const host = 'http://localhost:7000';
let time;
const obj = {
    getQrcode:  function getQrcode (type) {
        return `http://localhost:7000/qr?token=${id}&type=${type}`;
    },
    listenerInfo: function listenerInfo (type) {
        return new Promise(function (resolve, reject) {
            console.log('start new Promise...');
            time =  window.setInterval(function () {
                fetch(`${host}/scan?token=${id}&type=${type}`).then(response => response.json())
                .then(data => {
                    if(data.value === "wait") {
                        // console.log(data);
                    } else {
                        resolve(data);
                    }
                    // console.log(data);
                })
                .catch(e => console.log(e));
            }, 1000);
        });
    },
    endListener: function endListener () {
        window.clearInterval(time);
        fetch('http://localhost:7000/openscan').then(response => response.json())
        .then(data => {
            // console.log(data);
        })
        .catch(e => console.log(e));
    }
    // listenerInfo: new Promise(function (resolve, reject) {
    //     console.log('start new Promise...');
    //     resolve(123);
    //     window.setInterval(async () => {
    //         debugger
    //         const response = await fetch('http://localhost:7000/scan?token=1575209868249&type=name');
    //         const myJson = await response.json();
    //         console.log(JSON.stringify(myJson));
    //     }, 1000)

    // }),
};
export default obj;