function definirColunas(LINHA, DESPESA) {
	if(!DESPESA) return;

	const NUMERO_COLUNAS = document.getElementById('tabela-despesas-cabecalho').rows[0].cells.length;
	
	for(let i = 0; i < NUMERO_COLUNAS; i++) {
		definirColuna(i, LINHA, DESPESA);

		if(i == (NUMERO_COLUNAS - 1)) adicionarBotaoExcluir(i, LINHA, DESPESA);
	}
}

function definirColuna(i, LINHA, DESPESA) {
	switch(i) {
		case 0:
			LINHA.insertCell(i).innerHTML = `${DESPESA.DIA}/${DESPESA.MES}/${DESPESA.ANO}`;
			break;

		case 1:
			LINHA.insertCell(i).innerHTML = definirColunaTipo(DESPESA.TIPO);
			break;

		case 2:
			LINHA.insertCell(i).innerHTML = DESPESA.DESCRICAO;
			break;

		case 3:
			LINHA.insertCell(i).innerHTML = `$${DESPESA.VALOR}`;
			break;
	}
}