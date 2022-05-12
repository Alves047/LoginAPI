# Login_com_Mongoose
Este projeto tem como objetivo simular o funcionamento de registro / login de um usuario, inserindo as informaçoes nos respectivos campos para sua autenticação e alterando o status da mesma. 

----------------------------------IMPORTANTE----------------------------------------------------------- 
A base de dados escolhida para o armazenamento dos dados fornecidos pelo User foi o MongoDB (banco nao-relacional), através da criaçao pessoal de um Cluster, disponivel em https://www.mongodb.com/atlas/database .
Para a verificação do funcionamento de todo o projeto, é necessário a criação de um cluster no MongoDB, inserindo a URL para conexao com a aplicação.
Para testes da aplicaçao e API, foi utilizado o Thunder Client, aonde simula toda a requisição que seria feita pelo Front-end. Essa ferramenta auxilia nos testes sem a necessidade de criar uma pagina no Front para apenas realizar os testes, fornecendo mais eficiencia na criaçao. É possivel realizar tais testes em outras APIs REST ( fica a critério do tester).
---------------------------------------------------------------------------------------------------------------------

PASSO A PASSO PARA CONEXAO DA APLICAÇÃO COM A BASE DE DADOS:

  Para o funcionamento de toda a aplicação, é necessário instalar os modulos referentes a library Mongoose. Para isso, é possivel realizar a instalaçao através do codigo abaixo:
  ![image](https://user-images.githubusercontent.com/85362752/168082311-2aabbae8-a86c-4a9c-9993-da4fb4b5e1fb.png)
    ----Caso prefira, os codigos utilizados para instalaçao, bem como outras funcionalidades, estao disponiveis em -> https://mongoosejs.com/docs/index.html;
 
 Após a instalaçao, as variaveis de importaçao, nas quais sao utilizadas, ja estarão no escopo do codigo principal:
    ![image](https://user-images.githubusercontent.com/85362752/168083037-7211a0d0-e38d-4c03-9c4f-791647bed615.png)
  
  Feito tudo isso, é possivel realizar a conexao de fato com o banco de dados, no qual fará o armazenamento dos perfis do usuario e o "fetch" dos dados para o login, como é possivel observar na imagem abaixo:  
    ![image](https://user-images.githubusercontent.com/85362752/168083541-87bdd6b1-cbc6-48d2-8cd0-b8849aa0ea43.png) .
 
 ---------------------------------------------------------------------------------------------------------------------   
ESQUEMA (SCHEMA) DEFAULT PARA REGISTRO DO USUARIO
   
   Para a criaçao de um novo usuario, a aplicaçao segue com base na estrutura de um modelo, sendo possivel observar em 'models/user.js', descrito com base na documentaçao do Mongoose: -> https://mongoosejs.com/docs/models.html. O link anterior citado, apresenta detalhes para a criaçao e estruturaçao de um documento, junto com as propriedades dos objetos, como demonstra a imagem abaixo:
   ![image](https://user-images.githubusercontent.com/85362752/168090003-30e9418d-5201-49c1-b29f-5bd84cb06b36.png)
   
   Alguns campos da estrutura apresenta propriedades obrigatórias, escritas com "required = true", pois sao necessarias para o registro do usuario, alem de comprimentos dos dados minimos e maximos:         
      ![image](https://user-images.githubusercontent.com/85362752/168091191-60106f16-d626-45b6-a30f-67b0d703589a.png)

COMPLEMENTO ----> VALIDAÇÃO: PROPRIEDADES DO OBJETO:
    Algumas propriedades do objeto não respeitam totalmente as regras da aplicação, sendo assim necessária a implementaçao de uma validaçao. Para isso, foi utilizado o modulo 'Joi' para que, de fato, respeite o tamanho minimo e maximo de dados para registro e login, como é possivel observar na imagem adiante: 
    
   ![image](https://user-images.githubusercontent.com/85362752/168093727-57881207-b6f0-492a-a29d-f784597a79b9.png)
    
------------------------------------------------------------------------------------------------------------------      



    

          
       
     
     
