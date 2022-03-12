function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.05;
    var casaDecimal = valorEmReal.toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor da conversão para real é R$ " + casaDecimal + ".";
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  function ConverterEuro() {
	var valorElemento = document.getElementById("valor-euro");
	var valor = valorElemento.value;
	var valorEmEuroNumerico = parseFloat(valor);

	var valorEmReal = valorEmEuroNumerico * 5.51;
    var casasdecimais = valorEmReal.toFixed(2);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O valor da conversão para real é R$ " + casasdecimais + ".";
	elementoValorConvertido.innerHTML = valorConvertido;
}