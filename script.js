/*
https://cloud9.greenant.com.br/log/MAC
https://cloud9.greenant.com.br/meter/MAC
https://cloud9.greenant.com.br/api/last/logs/MAC
https://cloud9.greenant.com.br/api/last/measurements/MAC 
*/

function validaMac(mac) {
    //Valida o endereço MAC
    mac = mac.toUpperCase().trim();
    //console.log(mac, mac.length);
    if (mac.length != 12) {
        //console.log("erro de tamanho");
        window.open("error.html");
        return -1;
    } else if (!mac.match(/([A-F0-9]{12})/)) {
        //console.log("erro de simbolo");
        window.open("error.html");
        return -1;
    } else {
        return mac;
    };
};

function seletorCloud9 (mac, modo) {
    //Retorna a URL do canal do cloud9 escolhido
    if (modo === "all_logs") {
        modo = "https://cloud9.greenant.com.br/log/";
    } else if (modo === "all_meter") {
        modo = "https://cloud9.greenant.com.br/meter/";
    } else if (modo === "last_logs") {
        modo = "https://cloud9.greenant.com.br/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = "https://cloud9.greenant.com.br/api/last/measurements/";
    } else {
        //console.log("erro de seleção");
        window.open("error.html");
        return -1;
    };
    return endereco = modo + mac;
}


function pegadados() {
    var formDados = new FormData(document.querySelector('form'));
    var modo = formDados.get('selector');
    var mac = formDados.get('mac_address');
    
    // Verificando se o MAC é válido
    var macValido = validaMac(mac);
    
    if (macValido === -1) {
        return -1;
    };
    
    // Retornando a URL do Cloud9
    var endereco = seletorCloud9 (macValido, modo);

    if (endereco !== -1) {
        window.open(endereco);
        return 0;
    } else {
        return -1;
    };
};

function caixaBaixa () {
    var caixaAlta = document.getElementById('mac_caixa_alta').value;
    caixaAlta = caixaAlta.trim();
    // console.log(caixaAlta);
    
    var caixaBaixa = caixaAlta.toLowerCase();
    // console.log(caixaBaixa);

    return document.getElementById('caixa_baixa').innerHTML = caixaBaixa;
};
