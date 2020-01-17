# CAFÉ
## SIM, e sobre café

### Quem é esse tal de Cafesão? :question:

Ola, meu nome é Gabriel, apelido **Cafesão**.
Sou apenas um cara que **ama programar** e gosta de desafios, e desta vez o desafio foi criar um Server (Back-End) em NodeJS, que houvesse um banco de dados MongoDB, usasse React para a aplicação web, e claro, usar React-Native para Mobile (Android mais especificamente).

> YEAAAAH! Complexo!

### Antes de tudo...o que é esse projeto? :question:

Esse projeto foi uma pesquisa de algumas horas, procurando sobre tipos de café, as suas colheitas, preços, enfim, foi uma super pesquisa, aprendi muita coisa nova sobre essa bebida maravilhosa que é o café!

> E quase lei, todo o dev que se prese, tem que amar café, tem que tatuar "café" nas costas, junto com "[forEach() nunca mais](https://github.com/cafesao/forEach_Nunca_Mais)" ksksks brincadeira"

### E como foi o desenvolvimento deste projeto? :question:

Olha, difícil, quando terminei o projeto da [OmniStack](https://github.com/cafesao/Projeto_Tindev) eu ainda não me sentia preparado para encarar um projeto solo, React é facil, mas andar é fácil também, e os bebés não conseguem, só depois de muito cair no chão, eles aprendem, a mesma coisa acontece quando você esta tentando aprender algo, essa coisa se torna fácil ao longo do tempo, mas, até lá, ela é difícil, ou pelo menos complicada.

> Mas e claro, que o Sr. Cafesão, iria encarar esse desafio.

Demorou cerca de 3/4 dias para criar, testar e completar todo o projeto, e sim, passei bastante dificuldade, seja o APP para android, na hora de compilar, toda a hora dava erro, ou o comportamento do React no Android ficava estranho e eu tinha que rever algumas coisas no vídeo  da OmniStack, enfim, passei por certas dificuldades, mas elas são **MUITO** importantes nesta jornada, por que, quando você tem algum problema, e consegue resolver, você aprende algo novo, e esse novo conhecimento te da experiência, que uma hora ou outra, você vai utilizar.

### E o que achou do resultado? :smiley:

Achei muito legal, trabalhar com React e extremamente intuitivo e divertido, tem um desempenho excelente e a ideia de tudo ser um componente, depois que você consegue entender isso de fato, tudo fica mais simples, uma peça que se encaixa na outra, que se encaixa na outra e na outra... fica mais simples de entender o React.

Claro que a espaço para melhorias, mas de primeiro momento e com pouco conhecimento em React, sinto que ficou bacana e interessante.

### E o que espera do futuro? :expressionless:

Espero conseguir entender React e React-Native muito melhor do que agora, espero poder falar com segurança sobre esses dois, e obviamente, espero criar coisas muito legais e divertidas, com uma pegada de moderno e simples.

> Se tem algo que eu amo, sem ser a minha noiva, é algo que seja moderno e simples, lindo!

### E como faço para rodar? :open_mouth:

Primeiramente você precisa ter o [Yarn](https://yarnpkg.com/pt-BR/) instalado, junto com o [Node.JS](https://nodejs.org/pt-br/).

Feito isso e verificado se o Yarn e o Node.JS esta devidamente instalado, e só entrar nas pastas do 'frontend', 'backend' e 'mobile' via terminal e colocar o comando `yarn install`, feito isso ele ira instalar todas as dependências. (**O esperado é esse, mas...nunca se sabe**)

Explicação do comando:

>O comando yarn install é usado para instalar todas as dependências de um projeto. As dependências são recuperadas do arquivo package.json do seu projeto, e armazenadas no arquivo yarn.lock.

Depois de ter instalado as dependências e só colocar `yarn dev` dentro da pasta do 'backend', `yarn start` na pasta do 'frontend' e `yarn react-native run-android` na pasta do 'mobile'.
No caso do mobile, não esqueça de executar `npx react-native init [NOME_DO_APP]`, para que ele baixe os arquivos para rodar, tanto no Android, quanto no Iphone.

Caso algum erro aconteça no 'frontend', execute `yarn create react-app [NOME_DO_APP]` e apenas realoque as pastas e apague os arquivos que você não ira usar.

### Opcional :exclamation:

Você precisa ter instalado o [Docker](https://www.docker.com) ou o banco de dados do MongoDB, dentro de 'backend/src/server.js', encontre a linha 21 e modifique.

**DICA**: Se você quiser ter um banco de dados MongoDB na nuvem **TOTALMENTE DE GRAÇA**, use o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).