function Converter () {
    //uma variavel que vai conectar o element com id do html
    var valorElemento = document.getElementById('valor');

    // uma variavel que vai extrair o que esta dentro na id 
    var valor = valorElemento.value;


    //essa nova variavel vai pegar o valor que foi inserido e passar pra numero decimal
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.12;

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = "R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido;

 
    
    // console.log(valorEmReal)
    
};


function ConverterEuro () {
    //uma variavel que vai conectar o element com id do html
    var valorElemento = document.getElementById('valor');

    // uma variavel que vai extrair o que esta dentro na id 
    var valor = valorElemento.value;


    //essa nova variavel vai pegar o valor que foi inserido e passar pra numero decimal
    var valorEmDolarNumerico = parseFloat(valor);

 

    var valorEmEuro = valorEmDolarNumerico *  1.10;

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = "€ " + valorEmEuro
    elementoValorConvertido.innerHTML = valorConvertido;

  
    
    // console.log(valorEmEuro)
    
};


function ConverterBitcoin () {
    //uma variavel que vai conectar o element com id do html
    var valorElemento = document.getElementById('valor');

    // uma variavel que vai extrair o que esta dentro na id 
    var valor = valorElemento.value;


    //essa nova variavel vai pegar o valor que foi inserido e passar pra numero decimal
    var valorEmDolarNumerico = parseFloat(valor);


    var valorEmBitcoin = valorEmDolarNumerico *  39.589;

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = "BTC " + valorEmBitcoin
    elementoValorConvertido.innerHTML = valorConvertido;


    
    // console.log(valorEmBitcoin)
    
};





