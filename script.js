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
    
    // Verificando se o MAC é válido
    mac = mac.toUpperCase();
    console.log(mac, mac.length);
    if (mac.length != 12) {
        console.log("erro de tamanho");
        window.open("error.html");
    } else if (!mac.match(/([A-F0-9]{12})/)) {
        console.log("erro de simbolo");
        window.open("error.html");
    };

    if (modo === "all_logs") {
        modo = "https://cloud9.greenant.com.br/log/";
    } else if (modo === "all_meter") {
        modo = "https://cloud9.greenant.com.br/meter/";
    } else if (modo === "last_logs") {
        modo = "https://cloud9.greenant.com.br/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = "https://cloud9.greenant.com.br/api/last/measurements/";
    } else {
        console.log("erro de seleção");
        window.open("error.html");
    };
    endereco = modo + mac;
    window.open(endereco);
};
