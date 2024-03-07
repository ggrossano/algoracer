const express = require('express');
const mysql = require('mysql');
const cors =require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001; // Puoi scegliere una porta a tua scelta

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Nome utente del database
  password: '', // Password del database
  database: 'algoracer', // Nome del tuo database
});

db.connect(err => {
  if (err) {
    console.error('Errore durante la connessione al database:', err);
  } else {
    console.log('Connessione al database avvenuta con successo');
  }
});

app.post('/login', (req, res) => {
  console.log('Richiesta di login ricevuta:', req.body);

  const query = "SELECT * FROM user_u WHERE `email` = ? AND `md5pwd` = ?";
  
  db.query(query,[req.body.email, req.body.md5pwd], (err, data) => {
    if (err) {
      return res.json("Error");
    } 
    if(data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});