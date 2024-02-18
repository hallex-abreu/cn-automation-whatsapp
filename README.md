# CN Automation WhatsApp

Este é um projeto de automação para envio de mensagens no WhatsApp usando Node.js e a biblioteca whatsapp-web.js.

## Pré-requisitos

- Node.js instalado na sua máquina
- Conta WhatsApp ativa e dispositivo móvel com WhatsApp Web conectado

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/hallex-abreu/cn-automation-whatsapp.git
    ```

2. Instale as dependências:

    ```bash
    cd cn-automation-whatsapp
    npm install
    ```

## Configuração

1. Renomeie o arquivo `.env.example` para `.env`.
2. Edite o arquivo `.env` e insira suas credenciais do WhatsApp.
3. Certifique-se de ter uma lista de contatos no formato JSON (por exemplo, `contacts.json`).

## Uso

Execute o script principal para enviar mensagens para os contatos na sua lista:

```bash
npm start
```

## Contribuição

Contribuições são bem-vindas! Abra um problema ou envie um pull request para sugerir melhorias.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Este README é apenas um exemplo básico. Sinta-se à vontade para adicionar mais detalhes, instruções de uso avançado, exemplos de configuração, ou qualquer outra informação relevante para o seu projeto.