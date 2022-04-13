function mostrarMensagemValidacao(validacao) {
	let tituloMensagem;
	let tituloClassCor = "modal-title ";
	let mensagem;
	
	if(validacao) {
		tituloMensagem = 'Despesa cadastrada';
		tituloClassCor = 'text-success';

		mensagem = 'Sua despesa foi registrada com sucesso!';
	} else {
		tituloMensagem = 'Erro ao cadastradar despesa';
		tituloClassCor = 'text-danger';

		mensagem = 'Por favor, preencha todos os campos corretamente.';
	}

	const ELEMENTO_TITULO = document.getElementById('validacao-cadastro-modal-titulo');
	ELEMENTO_TITULO.innerHTML = tituloMensagem;
	ELEMENTO_TITULO.className = tituloClassCor;

	document.getElementById('validacao-cadastro-modal-mensagem').innerHTML = mensagem;

	$('#validacao-cadastro-modal').modal('show');
}