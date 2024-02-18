const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs').promises;

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log('Client is ready!');
  
  try {
    // Ler o arquivo contacts.json
    const contactsData = await fs.readFile('contacts.json', 'utf8');
    // const contactsData = await fs.readFile('contacts-test.json', 'utf8');
    const contacts = JSON.parse(contactsData);

    // Enviar mensagem para cada contato
    for (const contact of contacts) {
      await sendMessage(contact.phone, `Olá ${contact.name}, aqui é o Hallex! A Paz! Como você está? Estou passando para agradecer em nome da equipe da produção e dizer o quanto você é essencial para o nosso ministério. Sua presença e apoio são inestimáveis para nós. Saiba que estamos sempre à disposição para ajudar no que precisar. Vocês são os melhores! Deus os abençoe. Ótimo domingo! 😁🙏🏻🔥🚀`);
      console.log(`Mensagem enviada para ${contact.name} (${contact.phone})`);
    }

    console.log('Todas as mensagens foram enviadas.');
  } catch (error) {
    console.error('Erro ao ler ou enviar mensagens:', error);
  }
});


async function sendMessage(phone, message) {
  try {
    await client.sendMessage(phone, message);
  } catch (error) {
    console.error(`Erro ao enviar mensagem para ${phone}: ${error.message}`);
  }
}

client.initialize();