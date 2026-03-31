# Vexternos

This repository contains the full-stack Minecraft server control panel.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sggameryt782-bot/Vexternos.git
   cd Vexternos
   ```

2. **Install Dependencies**
   Make sure you have Node.js and npm installed. Run the following command:
   ```bash
   npm install
   ```

3. **Configuration**
   Create a configuration file by copying the example:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your server credentials and settings.

4. **Running the Server**
   Start the server using:
   ```bash
   npm start
   ```
   The server should now be running on `http://localhost:3000`.

## API Documentation

### Authentication
- **POST /api/auth/login**
  - Payload: `{ "username": "example", "password": "example" }`
  - Response: `{ "token": "your_auth_token" }`

### Server Management
- **GET /api/servers**
  - Retrieve a list of servers.
  
- **POST /api/servers**
  - Payload: `{ "name": "New Server", "ip": "192.168.1.1" }`
  - Response: `{ "success": true, "serverId": "123" }`

## Running Locally

1. Ensure you have MongoDB running or use a cloud-based MongoDB service.
2. Make sure all dependencies are installed.
3. Follow the **Configuration** steps above.
4. Start the server and access the panel through your browser.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!