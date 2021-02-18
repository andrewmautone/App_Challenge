
 function createError(error) {

     return {
         status: "error",
         error: error
     }

 }


 function validateEmail(email) {
     const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return reg.test(String(email).toLowerCase());
 }

 function validateUser(body) {

    const {email,password,username} = body
    
     if (!validateEmail(body.email))
         throw createError("Invalid email")

     if (!body.password) {
         throw createError("Invalid password")
     }
     if (body.password.length < 5) {
         throw createError("Password is too short")
     }

     if (!body.username)
         throw createError("Invalid username")

     if (body.username.length < 2)
         throw createError("Username is too short")
        
    return {email:email,password:password,username:username,bio:'',connections:{}}

 }
 module.exports = {
     createError,
     validateEmail,
     validateUser
 }