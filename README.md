# To_do_List-Node.js
<p align="justify">&emsp;&emsp;To do list se baseando nessa <a href="https://youtube.com/playlist?list=PLR8JXremim5BhTIEpqbHcVkdeYE6lUaNh">playlist</a>, o projeto é uma To-do list com as funcionalidades de criar, editar e apagar tarefa, ela registra em cada tarefa o dia a qual foi criada. Foi feita usando node.js, com persistência em um banco de dados Mongo.DB e deploy com Heroku.</p>
<p align="justify">Decidi fazer algumas alterações do projeto apresentado na playlist, principalmente na estilização.</p>

## Para usar
<p align="justify">&emsp;&emsp;Para usar criar sua própria aplicação, basta clonar o repositório em sua máquina e executar o comando <code>npm i</code> para instalar as dependências necessárias, depois fazer uma cópia do arquivo ".env.exemple" com o nome ".env", adicionando este ao arquivo ".gitignore". Após isso, inserir, respectivamente, a porta local que deseja rodar aplicação e seu url para uso do Mongo.DB (você deve criar uma conta e uma base de dados no site do Mongo.DB para ter acesso ao link mecionado).</p>
<p align="justify">&emsp;&emsp;Feito isso sua aplicação já estará persistindo os dados na base de dados, e para realizar o deploy você deve criar uma conta e um projeto no Heroku e depois selecionando o método desejado, no meu caso fiz conectando minha conta do GitHub à conta do Heroku e selecionando o repositório que eu queria para deploy.</p>

## OBSERVAÇÕES:
- Para rodar usando heroku, deve-se também descomendar as duas linhas comentada sno arquivo "index.js". 
- Para usar a aplicação localmente no navegador de sua escolha, basta que execute comando <code>npm run dev</code>, e acessar: http://localhost/PORTA, substituindo "PORTA" pelo número da usada no arquivo ".env".
