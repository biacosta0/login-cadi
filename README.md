# login-cad
 

# Explicação do Código controller.js
Este código JavaScript implementa funcionalidades de validação de formulário, gerenciamento de uma lista de usuários, e manipulação de dados dentro de uma tabela HTML. A seguir, descreveremos cada uma das funções e partes do código em detalhes.

# 1. Função acessar()  
![Função Acessar](img/funcao-acessar.png)

Objetivo: Garantir que os campos de login (e-mail e senha) estejam preenchidos antes de permitir que o usuário prossiga para outra página.
Funcionamento:
A função começa obtendo os valores dos campos de e-mail e senha utilizando o método getElementById para acessar os elementos HTML com os IDs loginEmail e loginSenha.
Estes valores são armazenados nas variáveis loginEmail e loginSenha.
A seguir, a função verifica se algum desses valores é vazio (falsy). Se um dos campos não estiver preenchido, a função exibe um alerta (alert) solicitando ao usuário que preencha todos os campos.
Se ambos os campos estiverem preenchidos, a função redireciona o usuário para a página cadastro.html utilizando window.location.href.

# 2. Função salvarUser()  
![Função Salvar](img/funcao_SalvarUsuario.png)

Objetivo: Adicionar um nome à lista de usuários (armazenada em um array) e atualizar a tabela que exibe essa lista.
Funcionamento:
A função começa obtendo o valor do campo de texto onde o nome do usuário é inserido (nomeUser).
Se o campo nomeUser não estiver vazio, o nome é adicionado ao array dadosLista usando o método push.
Em seguida, a função crialista() é chamada para atualizar a tabela HTML que exibe a lista de usuários.
O campo de texto é então limpo para preparar para a próxima entrada.
Se o campo nomeUser estiver vazio, a função exibe um alerta solicitando que um nome seja informado.  

# Por que usar um array nessa situação?
1 Armazenamento: O array dadosLista serve como um depósito para os nomes dos usuários. Cada vez que um novo nome é inserido, ele é adicionado ao final do array.    

2 Organização: Ao utilizar um array, você mantém os nomes dos usuários em uma estrutura organizada. Isso facilita a manipulação e exibição dos dados posteriormente.

3 Reutilização: Os dados armazenados no array podem ser reutilizados de diversas formas. Por exemplo, você pode:  

◦ Exibir todos os nomes em uma lista.
◦ Buscar por um nome específico.
◦ Realizar cálculos ou outras operações com os dados.

4 Persistência: Embora o array no exemplo seja armazenado na memória do navegador, você pode estender essa funcionalidade para salvar os dados em um arquivo local ou em um servidor, garantindo a persistência dos dados mesmo após a página ser recarregada.

# 3. Função crialista()  
![Função Cria Lista](img/funcao-Crialista.png)

Objetivo: Exibir a lista de usuários na tabela HTML.
Funcionamento:
A função começa definindo o cabeçalho da tabela (títulos das colunas) como "Nome Usuário" e "Ações".
A função então usa um loop for para iterar sobre todos os elementos do array dadosLista, começando do índice 0 até o último índice (dadosLista.length - 1).
Para cada nome no array, a função cria uma nova linha na tabela, contendo o nome do usuário e dois botões: "Editar" e "Excluir". Esses botões chamam as funções editar() e excluir() respectivamente, passando o índice da linha na tabela como argumento.
Finalmente, a tabela HTML é atualizada com o conteúdo gerado.

# 4. Função excluir(i)  
![Função excluir nome](img/funcao-ExcluirNome.png)

Objetivo: Remover um nome da lista de usuários e atualizar a tabela HTML.
Funcionamento:
A função recebe o índice i da linha da tabela onde o botão "Excluir" foi clicado.
Em seguida, o nome correspondente no array dadosLista é removido usando o método splice, que remove o item no índice especificado.
A função então remove a linha correspondente da tabela HTML usando deleteRow.

# 5. Função editar(i)  
![Função Edita Nome](img/funcao-EditarNome.png)

Objetivo: Permitir a edição de um nome na lista de usuários.
Funcionamento:
A função recebe o índice i da linha da tabela onde o botão "Editar" foi clicado.
O valor correspondente no array dadosLista é carregado no campo de texto nomeUser para edição.
O nome antigo é removido da lista usando splice, deixando o campo pronto para uma nova entrada ou edição.
tem menu de contexto

# Quando e Como Usar Arrays
• JavaScript: Arrays em JavaScript são extremamente úteis para:  
◦ Armazenar listas de itens (números, strings, objetos, etc.).  
◦ Alterar sobre esses itens usando loops.  
◦ Manipular dados de forma eficiente.  
• Outras Linguagens: Em linguagens server-side, arrays são usados para:  
◦ Armazenar dados provenientes de bancos de dados ou outras fontes.  
◦ Gerar HTML dinamicamente, como listas, tabelas ou outros elementos que se repetem.

# A seguir o resultado:  
![Resultado-Projeto](img/Resultado-Projeto.png)

Agora iremos ver o resultado com nome salvo:  
![Nome-salvo](img/Nome-Salvo.png)

