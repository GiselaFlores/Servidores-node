//servidor con express - previo npm i express  en la terminal para la dependencia

const http = require('express');
const app = express();
const port = 3000;

let users = [
    {id:1, name: "carlos"},
    {id:2, name: "maria"}
    //{id:3, name: "pedro"} crear uno
]; 

app.use(express.json());

//obtener los usuarios

app.get('/users', (req, res)=> {
    res.json(users);
});

// obtener el id del usuario "id"

app.get('/users/:id', (req, res)=> {
    const user = users.find( u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("Usuario no disponible");
    res.json(user);
});

// crear un usuario

app.get('/users/:id', (req, res)=> {
   const user = {
     id: users.length + 1,
     name: req.body.name
   };

   users.push(user);
   res.status(201).json(user);
});


// Actualizar un usuario que ya existe

app.get('/users/:id', (req, res)=> {
    const user = users.find( u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("Usuario no encontrado");

    user.name = req.body.name;
    res.json(user);
 });

 // Eliminar usuario

 app.get('/users/:id', (req, res)=> {
    const userId = users.findIndex( u => u.id === parseInt(req.params.id));
    if(userId === -1) return res.status(404).send("Usuario no encontrado");

    users.splice(userId, 1);
    res.status(204).send();
 });


app.listen(port, ()=> console.log(`Servidor corriendo en puerto: ${port}`));