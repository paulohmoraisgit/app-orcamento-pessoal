function cadastrarDespesa() {
	const DESPESA = pegarValoresCampos();

	if(BD.validarDadosDespesa(DESPESA)) {
		BD.armazenarDespesa(DESPESA);
		limparCampos();
	}
}

function carregarTabelaDespesas(filtrar = false) {
	const LISTA_DESPESAS = BD.listaDespesas(filtrar);	
	const CORPO_TABELA = document.getElementById('tabela-despesas-corpo');
	
	criarTabelaDespesas(LISTA_DESPESAS, CORPO_TABELA);
}