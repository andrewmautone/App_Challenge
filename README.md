# WebApp + Api
Antes de mais nada, você precisa instalar uma dependência global para executar a API que o backend irá consumir como database:
```sh
npm install -g json-server
```
Use o comando na pasta raiz do projeto
```sh
json-server -p 3001 database.json
```
para iniciar o json-server
#
## Iniciando o Backend
Abra a pasta backend pelo terminal e instale as dependencias usando o comando ``` npm i``` ou ```yarn```

use o comando ```npm test``` para rodar todos os testes

Após concluido inicie o servidor com o comando ```npm start```



#
## Iniciando o Frontend

Abra a pasta backend pelo terminal e instale as dependencias usando o comando ``` npm i``` ou ```yarn```

Após concluido inicie o front com o comando ```npm start```

#
## Observações
 Você pode vizualizar perfis de outro usuario entrando na url /profile/:username

 Somente o proprio usuario pode editar o seu perfil

 As senhas são todas criptografadas por Hash;

 Ao criar uma sessão é gerado um JWT que automaticamente é interceptado pelo axios

 No front foi usado Context api e localStorage para guardar informaçoes na pagina 
