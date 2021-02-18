const app = require("./src/index"); 
const supertest = require("supertest");
const api = require('./src/services/api')
const request = supertest(app);

let token = null;
let user = null;
let otherUser = null;
let otherToken = null;
describe('User Routes',async () => {

    it('Create new user',async () => {
      
     await request.post('/users')
     .send({username:'teste',email:'teste544567484@teste.com',password:'Teste123'})
     .then(response => otherUser = response.body)

     await request.post('/users')
     .send({username:'teste',email:'teste54567484@teste.com',password:'Teste123'})
     .expect(200)
    })
    it('Login with new user',async () => {
      
     await request.post('/session')
     .send({email:'teste544567484@teste.com',password:'Teste123'})
     .then(response => {otherToken = response.body.token})

     await request.post('/session')
     .send({email:'teste54567484@teste.com',password:'Teste123'})
     .expect(200)
     .then(response => {token = response.body.token})
    })
    it('Retrieve user infos',async () => {
      
     await request.get('/users')
     .set('Authorization', 'Bearer ' + token)
     .expect(200)
     .then(response => {user = response.body})
  
    })
    it('Can not use repeated email',async () => {
      
     await request.post('/users')
     .send({username:'teste',email:'teste54567484@teste.com',password:'Teste123'})
     .expect(400)
     
    })
    it('Cant change bio without token',async () => {
        await request.put('/users/'+user.id)
        .send({bio:'teste'})
        .expect(401)
    })
    it("Cant change other's bio without token",async () => {
        await request.put('/users/'+user.id)
        .set('Authorization', 'Bearer ' + otherToken)
        .send({bio:'teste'})
        .expect(400)

    })

    
    
  })
  describe('Connections Routes',async  () => {
    it("Add connection",async () => {
    await request.post('/connection/add/1')
    .set('Authorization', 'Bearer ' + token)
    })
    it("Remove connection",async () => {
    await request.post('/connection/remove/1')
    .set('Authorization', 'Bearer ' + token)

   
    })
    it("Delete users",async () => {
        await api.delete('/users/'+user.id)
        await api.delete('/users/'+otherUser.id)
        
   
    })
    

  })