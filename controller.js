
//VALIDAÇÃO DE PREENCHIMENTO
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    } else{
       // alert("Campos preenchidos com sucesso");
       window.location.href = 'cadastro.html';
    }
}
 
//FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES
 
var dadosLista = [];
  //A linha var dadosLista = []; cria uma variável chamada dadosLista e atribui a ela um array vazio. Isso significa que você agora tem uma caixa (o array) onde poderá armazenar dados, mas essa caixa está inicialmente vazia.

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
      dadosLista.push(nomeUser);
      //Adiciona elementos: Coloca os elementos especificados no final do array.
     //Retorna o novo comprimento: Após adicionar os elementos, o método push() retorna o novo comprimento do array.
     //Modifica o array original: O método push() altera o array original, adicionando os novos elementos.
      //console.log(dadosLista);
      crialista();
      document.getElementById('nomeUser').value = "";
     //cria lista é responsavel por atualizar a lista de nomes exibidas na página
    } else{
        alert("Favor, informar um nome para cadastro");
    } 
}

  //FUNÇÃO DE CRIAÇÃO DE LISTA
  function crialista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th>";
   //LAÇO DE REPETIÇÃO
    for(let i = 0; i <=(dadosLista.length - 1); i ++){
      tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button onclick='editar(this.parentNode.parentNode.rowIndex)'> Editar </button> <button onclick='excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button></td></tr>";
      document.getElementById('tabela').innerHTML = tabela;
    }
   }
  
  
  //FUNÇÃO PARA EXCLUIR NOME DE LISTAS

  function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
   //O método `splice` em JavaScript é uma função versátil que permite modificar arrays ao inserir ou remover elementos em posições específicas, tornando a manipulação de arrays mais eficiente.
  }
s
  //FUNÇAÕ EDITAR NOME DA LISTA

  function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);s

  }