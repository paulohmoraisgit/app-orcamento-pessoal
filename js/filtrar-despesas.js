function filtrarDespesas(despesas) {
	const FILTRO_MODELO = pegarValoresCampos();
	
	if(!checarFiltros(FILTRO_MODELO)) return despesas;

	despesas = despesas.filter((despesa) => {
		for(let i in despesa) {
			if((FILTRO_MODELO[i] != '') && (despesa[i] == FILTRO_MODELO[i])) return true;
		}

		return false;
	});
	console.log(despesas);
	return despesas;
}

function checarFiltros(FILTRO_MODELO) {
	for(let i in FILTRO_MODELO) {
		if(FILTRO_MODELO[i] != '') return true;
	}

	return false
}