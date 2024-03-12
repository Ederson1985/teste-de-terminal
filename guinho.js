function filtraPalavrasComMaisDeCincoCaracteres(palavras) {
    return palavras.filter(palavra => palavra.length > 5);
  }
  
  const listaDePalavras = ['banana', 'maçã', 'laranja', 'manga', 'abacate', 'uva', 'jaca', 'mela', 'goiaba', 'acerola', 'tangerina', 'maracuja', 'cereja', 'damasco', 'abacaxi', 'melancia', 'mamão', 'limão', 'laranja'];
  const listaFiltrada = filtraPalavrasComMaisDeCincoCaracteres(listaDePalavras);
  console.log(listaFiltrada);

  var
