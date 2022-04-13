function adicionarBotaoExcluir(i, LINHA, DESPESA) {
	const BOTAO_EXCLUIR = document.createElement('button');

	BOTAO_EXCLUIR.className = 'btn btn-danger';
	BOTAO_EXCLUIR.innerHTML = '<i class="fa-solid fa-xmark"></i>';

	const SUFIXO_ID = 'item-despesa-';
	BOTAO_EXCLUIR.id = `${SUFIXO_ID}${DESPESA.CHAVE_UNICA}`;

	BOTAO_EXCLUIR.onclick = function() {
		BD.removerDespesa(this.id.replace(SUFIXO_ID, ''));
		LINHA.remove();
	}

	LINHA.insertCell(i).append(BOTAO_EXCLUIR);
}