function onClickCalcularJuros() {
    var valorInicial = parseFloat(document.getElementById("valorInicial").value);
    var taxaJurosMes = parseFloat(document.getElementById("taxaJurosMes").value);
    var mesesInvestidos = parseFloat(document.getElementById("mesesInvestidos").value);
  
    var valorFinal = (valorInicial * Math.pow((1 + taxaJurosMes / 100), mesesInvestidos)).toFixed(2);
    var valorJuros = (valorFinal - valorInicial).toFixed(2);
  
    var resultado = `O valor do emprestimo/investimento foi de ${valorInicial} reais, `;
    resultado += `com juros mensal de ${taxaJurosMes}%, `;
    resultado += `investido por ${mesesInvestidos} meses.<br>`;
    resultado += `Valor após o prazo é de ${valorFinal} reais. <br>`;
    resultado += `Somente o valor dos juros foi de ${valorJuros} reais. <br>`;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  



//  M = C * (1 + i)t
// M = montante ou valor final
// C = capital ou valor inicial
// i = juros mensal
// t = meses investido
