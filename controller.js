// Validação de preenchimento
function acessar() {
  let loginEmail = document.getElementById('loginEmail').value;
  let loginSenha = document.getElementById('loginSenha').value;

  if (!loginEmail || !loginSenha) {
    alert('Favor preencher todos os campos');
  } else {
    alert('Campos preenchidos com sucesso');

    window.location.href = 'cadastro.html';
  }
}

//Função de criação do array para armazenamento de dados

var dadosLista = [];
var emailLista = [];


function salvarUser() {
  let nomeUser = document.getElementById('nomeUser').value;

  

  if (nomeUser) {
    dadosLista.push(nomeUser);
    console.log(dadosLista);
    criarLista();
    document.getElementById('nomeUser').value = "";
  }
  else {
    alert("Favor informar o nome");
  }

  let emailUser = document.getElementById('emailUser').value;

  if (emailUser) {
    emailLista.push(nomeUser);
    console.log(emailLista);
    criarLista();
    document.getElementById('emailUser').value = "";
  }
  else {
    alert("Favor informar o email");
  }
}
// FUNÇÃO DE CRIAÇÃO DE LISTA
function criarLista() {
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
  for (let i = 0; i <= (dadosLista.length - 1); i++) // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
    tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td>  <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> </td></tr>";
  document.getElementById('tabela').innerHTML = tabela;
}
// FUNÇÃO PARA EXCLUIR NOME DA LISTA

function excluir(i) {
  dadosLista.splice((i - i), 1); //Splice é uma das maneiras mais úteis de manipular arrays em JavaScript. Ele permite remover ou adicionar elementos em uma posição específica de um array
  document.getElementById('tabela').deleteRow(i);
}

//FUNÇÃO PARA EDITAR O NOME DA LISTA

function editar(i) {
  document.getElementById("nomeUser").value = dadosLista[(i - 1)];
  dadosLista.splice(dadosLista[(i - 1)], 1);
}


//teste

//Validar acesso em tela de login

function acessar() {

  let loginEmail = document.getElementById('loginEmail').value;
  let loginSenha = document.getElementById('loginSenha').value;

  if (!loginEmail || !loginSenha) {
    alert("Favor preencher todos os campos.");

  } else {
    //alert("Campos preenchidos com sucesso.");
    window.location.href = 'cadastro.html';

  }

}


//Função que armazena, em array, nome na tela de cadastro

var dadosLista = [];
var salvaEmail = [];

function salvarUser() {
  let nomeUser = document.getElementById('nomeUser').value;
  let email = document.getElementById('emailUser').value;
  
  if (document.getElementById('emailUser').value == "" ||
    document.getElementById('emailUser').value.indexOf('@') == -1 ||
    document.getElementById('emailUser').value.indexOf('.') == -1) {
    alert("Por favor, informar um E-mail válido");
    return false;
  }
  if (nomeUser && email) {
    dadosLista.push(nomeUser);
    salvaEmail.push(email);
    //console.log(dadosLista);
    crialista();
    document.getElementById('nomeUser').value = "";
    document.getElementById('emailUser').value = "";
  } else {
    alert("Favor informar o nome cadastrado");

  }
}


// Função para criar lista

function crialista() {
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Usuário</th><th>Email</th><th>Ações</th></tr>";
  for (let i = 0; i <= (dadosLista.length - 1); i++) {
    tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + salvaEmail[i] + "</td><td> <button type= 'button' onclick= 'editar(this.parentNode.parentNode.rowIndex)'> Editar </button> <button type= 'button' onclick= 'excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button></td></tr>";
    document.getElementById('tabela').innerHTML = tabela;
  }
}

//Função para editar nomes da lista

function editar(i) {
  document.getElementById('nomeUser').value = dadosLista[(i - i)];
  dadosLista.splice(dadosLista[(i - 1)], 1);
  document.getElementById('emailUser').value = salvaEmail[(i - i)];
  salvaEmail.splice(salvaEmail[(i - 1)], 1);


}

//Função para excluir

function excluir(i) {
  dadosLista.splice((i - 1), 1)
  document.getElementById('tabela').deleteRow(i);


}