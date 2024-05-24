const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs').promises;

const client = new Client({
    authStrategy: new LocalAuth(),
    webVersionCache: {
      type: 'remote',
      remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log('Client is ready!');
  
  try {
    // Ler o arquivo contacts.json
    const contactsData = await fs.readFile('contacts-send.json', 'utf8');
    // const contactsData = await fs.readFile('contacts-test.json', 'utf8');
    const contacts = JSON.parse(contactsData);

    // Enviar mensagem para cada contato
    for (const contact of contacts) {
      await sendMessage(contact.phone, `Olá, ${contact.name}, boa noite! A paz! Passando aqui para saber como você está e desejar um excelente restante de semana. Somos gratos pelo seu servir e por ter você na família Produção. Estamos à disposição para qualquer coisa que precisar. Deus abençoe. 😁🙏🏻🔥🚀`);
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