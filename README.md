# Login_with_Mongoose
Este projeto tem como objetivo simular o funcionamento de registro / login de um usuario, inserindo as informaçoes nos respectivos campos para sua autenticação e alterando o status da mesma. 

------------------------------------------------------------------------IMPORTANTE----------------------------------------------------------- 
A base de dados escolhida para o armazenamento dos dados fornecidos pelo User foi o MongoDB (banco nao-relacional), através da criaçao pessoal de um Cluster, disponivel em https://www.mongodb.com/atlas/database .
Para a verificação do funcionamento de todo o projeto, é necessário a criação de um cluster no MongoDB, inserindo a URL para conexao com a aplicação.


PASSO A PASSO PARA CONEXAO DA APLICAÇÃO COM A BASE DE DADOS:
 
  Para o funcionamento de toda a aplicação, é necessário instalar os modulos referentes a library Mongoose. Para isso, é possivel realizar a instalaçao atraves do codigo abaixo:
  ![image](https://user-images.githubusercontent.com/85362752/168082311-2aabbae8-a86c-4a9c-9993-da4fb4b5e1fb.png)
    ----Caso prefira, os codigos utilizados para instalaçao, bem como outras funcionalidades, estao disponiveis em -> https://mongoosejs.com/docs/index.html;
  Após a instalaçao, as variaveis de importaçao, nas quais sao utilizadas, ja estarão no escopo do codigo principal,(main.js), onde faz toda conexao com a aplicaçao:
    ![image](https://user-images.githubusercontent.com/85362752/168083037-7211a0d0-e38d-4c03-9c4f-791647bed615.png)
  Feito tudo isso, é possivel realizar a conexao de fato com o banco de dados, no qual fará o armazenamento dos perfis do usuario e o "fetch" dos dados para o login, como é possivel observar na imagem abaixo:  
    ![image](https://user-images.githubusercontent.com/85362752/168083541-87bdd6b1-cbc6-48d2-8cd0-b8849aa0ea43.png) .
 

 
