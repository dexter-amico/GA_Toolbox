/*
https://classic-receiver.greenant.com.br/log/MAC
https://classic-receiver.greenant.com.br/meter/MAC
https://classic-receiver.greenant.com.br/api/last/logs/MAC
https://classic-receiver.greenant.com.br/api/last/measurements/MAC 
*/

const urlBase = "https://classic-receiver.greenant.com.br"

function validaMac(testeMac) {
    //Valida o endereço MAC
    testeMac = testeMac.toUpperCase().trim();
    if (testeMac.length != 12) {
        console.error("erro de tamanho");
        return false;
    } else if (!testeMac.match(/([A-F0-9]{12})/)) {
        console.error("erro de simbolo");
        return false;
    } else {
        return testeMac;
    };
};

function seletorCloud9(mac, modo) {
    //Retorna a URL do canal do Classic Receiver escolhida
    if (modo === "all_logs") {
        modo = urlBase + "/log/";
    } else if (modo === "all_meter") {
        modo = urlBase + "/meter/";
    } else if (modo === "last_logs") {
        modo = urlBase + "/api/last/logs/";
    } else if (modo === "last_meter") {
        modo = urlBase + "/api/last/measurements/";
    } else {
        console.error("Nenhum modo selecionado")
        return false;
    };
    endereco = modo + mac;
    return endereco;
};

function pegadados(rota) {
    var listaDeMacs = document.querySelector('#cloud9 #mac_address').value.split(',');

    for (const item of listaDeMacs) {
        //verifica se o MAC é válido
        var macValido = validaMac(item);
        if (!macValido) { 
            console.warn(`MAC inválido ignorado: ${item}`);
            window.open("error.html")
            continue // Usa 'continue' para não cancelar os próximos MACs da lista
        };

        // Retornando a URL do Classic Receiver
        var endereco = seletorCloud9(macValido, rota);
        console.log(endereco);
        if (!endereco) { 
            console.warn("erro de seleção");
            window.open("error.html");
            continue
        };
        
        // Finalmente abre a página selecionada com o MAC
        window.open(endereco, '_blank');
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
