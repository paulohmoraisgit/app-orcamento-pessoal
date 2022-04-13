function pegarValoresCampos() {
	let valoresCampos = { };
	
	for(let i in CAMPOS) {
		valoresCampos[i] = CAMPOS[i].value;
	}

	return valoresCampos;
}