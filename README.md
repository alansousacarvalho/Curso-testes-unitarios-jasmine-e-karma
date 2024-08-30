# Testes unitários - Jasmine e Karma com Angular 18

- Repositório responsável pelo conteúdo aprendido no curso.
- Será necessário a instalação do Node com a versão 18.19.0.

### Clonando e configurando
 Abra a pasta aonde pretende salvar os arquivos, abra o prompt de comando e cole o código abaixo:
 
 ```
 git clone https://github.com/alansousacarvalho/Testes-unitarios-Jasmine-e-Karma.git
```

Instale as dependências

```
 npm i
```

### Rodando a aplicação
Parar iniciar o servidor com a aplicação funcionando digite o comando a baixo:

```
 ng serve
```

a aplicação estará disponível no endereço:

```
 localhost:4200
```

### Rodando os testes

Para visualizar os testes no navegador digite o comando a baixo:

```
 ng test
```
será aberto automaticamente um navegador com os testes.

- Para rodar visualizando a cobertura dos testes, basta digitar o comando abaixo:

```
 ng test --code-coverage
```

Após isso, será criada uma pasta chamada **coverage**, abra o arquivo index.html, clique com o botão direito e selecione "Open with Live Server" (Extensão Live Server)
