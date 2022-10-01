/*
https://cloud9.greenant.com.br/log/MAC
https://cloud9.greenant.com.br/meter/MAC
https://cloud9.greenant.com.br/api/last/logs/MAC
https://cloud9.greenant.com.br/api/last/measurements/MAC 
*/

function pegadados() {
    var formDados = new FormData(document.querySelector('form'));
    var modo = formDados.get('selector');
    var mac = formDados.get('mac_address');

    if (mac.length != 12) {
        window.open("error.html");
    }

    if (modo === "all_logs") {
        modo = "https://cloud9.greenant.com.br/log/";
    } else if (modo === "all_meter") {
        modo = "https://cloud9.greenant.com.br/meter/";
    } else if (modo === "last_logs") {
        modo = "https://cloud9.greenant.com.br/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = "https://cloud9.greenant.com.br/api/last/measurements/";
    } else {
        window.open("error.html");
    };
    endereco = modo + mac;
    window.open(endereco);
};
