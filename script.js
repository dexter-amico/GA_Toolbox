/*
https://cloud9.greenant.com.br/log/MAC
https://cloud9.greenant.com.br/meter/MAC
https://cloud9.greenant.com.br/api/last/logs/MAC
https://cloud9.greenant.com.br/api/last/measurements/MAC 
*/

const urlBase = "https://cloud9.greenant.com.br"

function validaMac(mac) {
    //Valida o endereço MAC
    mac = mac.toUpperCase().trim();
    if (mac.length != 12) {
        console.error("erro de tamanho");
        window.open("error.html");
        return false;
    } else if (!mac.match(/([A-F0-9]{12})/)) {
        console.error("erro de simbolo");
        window.open("error.html");
        return false;
    } else {
        return mac;
    };
};

function seletorCloud9(mac, modo) {
    //Retorna a URL do canal do cloud9 escolhido
    if (modo === "all_logs") {
        modo = urlBase + "/log/";
    } else if (modo === "all_meter") {
        modo = urlBase + "/meter/";
    } else if (modo === "last_logs") {
        modo = urlBase + "/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = urlBase + "/api/last/measurements/";
    } else {
        console.error("erro de seleção");
        window.open("error.html");
        return false;
    };
    endereco = modo + mac;
    window.open(endereco);
    return endereco;
};

function pegadados() {
    var formDados = new FormData(document.querySelector('form'));
    var modo = formDados.get('selector');
    var mac = formDados.get('mac_address');

    // separa a lista de MACs
    var listaDeMacs = mac.split(',')

    for (const item of listaDeMacs) {
        //verifica se o MAC é válido
        var macValido = validaMac(item);
        if (!macValido) { return };

        // Retornando a URL do Cloud9
        var endereco = seletorCloud9(macValido, modo);
        if (!endereco) { return };
    };
};

function caixaBaixa() {
    var caixaAlta = document.getElementById('mac_caixa_alta').value;
    caixaAlta = caixaAlta.trim();
    // console.log(caixaAlta);

    var caixaBaixa = caixaAlta.toLowerCase();
    // console.log(caixaBaixa);

    return document.getElementById('caixa_baixa').innerHTML = caixaBaixa;
};
