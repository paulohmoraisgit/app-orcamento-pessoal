const BD = {
	validarDadosDespesa(DESPESA) {
		let validacao = true;

		for(let i in DESPESA) {
			if((DESPESA[i] == '') || (parseInt(DESPESA[i]) && DESPESA[i] <= 0) || DESPESA.DIA > 31) { //fix this
				validacao = false;
				break;
			}
		}

		mostrarMensagemValidacao(validacao);
		return validacao;
	},

	armazenarDespesa(DESPESA) {
		DESPESA.CHAVE_UNICA = this.proximoId();
		localStorage.setItem(this.proximoId(), JSON.stringify(DESPESA));
	},

	proximoId() {
		return (localStorage.length == 0 ? 0 : localStorage.length);
	},
	
	listaDespesas(FILTRAR) {
		const DESPESAS_REGISTRADAS = { ...localStorage };
		let despesas = new Array();

		for(let i in DESPESAS_REGISTRADAS) {
			despesas.push(JSON.parse(DESPESAS_REGISTRADAS[i]));
		}
		
		if(FILTRAR) {
			limparTabelaDespesas();
			despesas = filtrarDespesas(despesas);
		}
		
		return despesas;
	},

	removerDespesa(CHAVE_UNICA) {
		localStorage.removeItem(CHAVE_UNICA);
	}
}