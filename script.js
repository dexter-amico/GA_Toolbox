/*
https://clodu9.greenant.com.br/log/MAC
https://clodu9.greenant.com.br/meter/MAC
https://clodu9.greenant.com.br/api/last/logs/MAC
https://clodu9.greenant.com.br/api/last/measurements/MAC 
*/

function pegadados() {
    var formDados = new FormData(document.querySelector('form'));
    var modo = formDados.get('selector');
    var mac = formDados.get('mac_address');

    if (modo === "all_logs") {
        modo = "https://cloud9.greenant.com.br/log/";
    } else if (modo === "all_meter") {
        modo = "https://cloud9.greenant.com.br/meter/";
    } else if (modo === "last_logs") {
        modo = "https://cloud9.greenant.com.br/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = "https://cloud9.greenant.com.br/api/last/measurements/";
    } else {
        // error handling
    };
    endereco = modo + mac;
    window.open(endereco);
}

/*
function seletor(modo, mac) {
    if (modo === "all_logs") {
        modo = "https://clodu9.greenant.com.br/log/";
    } else if (modo === "all_meter") {
        modo = "https://clodu9.greenant.com.br/meter/";
    } else if (modo === "last_logs") {
        modo = "https://clodu9.greenant.com.br/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = "https://clodu9.greenant.com.br/api/last/measurements/";
    } else {
        // error handling
    };
    endereco = modo + mac;
    return endereco;
}
*/

//console.log(seletor(modo, mac));