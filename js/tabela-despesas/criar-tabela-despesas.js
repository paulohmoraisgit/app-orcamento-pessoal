function criarTabelaDespesas(LISTA_DESPESAS, CORPO_TABELA) {
	LISTA_DESPESAS.forEach(function(DESPESA) {
		const LINHA = CORPO_TABELA.insertRow();
		
		definirColunas(LINHA, DESPESA);
	});
}