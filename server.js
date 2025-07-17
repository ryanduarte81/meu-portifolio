const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configurações para aceitar JSON e dados de formulário
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para receber o formulário
app.post('/contato', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Configurar o transporte do Nodemailer (exemplo com Gmail)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ryanduarteff@gmail.com',      // seu e-mail
      pass: 'gfhs xgek gqen pyng',             // senha de app (não a senha normal)
    },
  });

  // Configurar o e-mail
  let mailOptions = {
    from: email,
    to: 'ryanduarteff@gmail.com',          // para onde vai chegar
    subject: 'Nova mensagem do portfólio',
    text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
  };

  // Enviar o e-mail
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar mensagem.', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});