module.exports.formulario_inclusao_noticia = function(application, req, res){

	var noticia = {titulo: '', resumo: '', autor: '', data_noticia: ''};
	res.render('admin/form_add_noticia', {noticia: noticia});

}

	module.exports.salvar_noticia = function(application, req, res){

	var noticia = req.body;

	req.assert("titulo", "Título não pode estar vazio").notEmpty();
	req.assert("resumo", "Resumo não pode estar vázio").notEmpty();
	req.assert("resumo", "Resumo deve ter entre 10 e 100 caracteres").len(10, 100);
	req.assert("autor", "Nome do autor é obrigatório").notEmpty();
	req.assert("data_noticia", "Data da notícia é obrigatória").notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('admin/form_add_noticia', {jErros: erros, noticia: noticia});
		console.log(erros);
		return;
	}

	var connection = application.config.dbConfig();
	var noticiaModel = new application.app.models.noticiasModel(connection);

	noticiaModel.salvarNoticia(noticia, function(error, result){
		console.log('Notícia salva');
		res.redirect('/noticias');

});

	}