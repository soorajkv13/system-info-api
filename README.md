# System Info #
App build to serve an api to process and result HD Space,RAM,Running services in the server

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (v4 or higher)

### How do I get set up? ###

1. Clone the repository
2. Install dependencies: `npm install`
3. create .env file from .env.example
4. Set environment variables:
   - `MONGO_ATLAS_URI`: Connection string for MongoDB (e.g. `mongodb://srv....`)
   - `PORT`: port for the application
   - `MONGO_COLLECTION_SYSTEM_INFO`: Mongo db collection name for storing the system info (e.g. `store_system_info`)
5. Start the server: `npm start`  | to run development environment : `npm run dev`
6. Make sure mongodb connection is up in logs

### Verify the app is running ###
1. if a connection to MongoDB success it will log 'Connected to Mongodb Atlas' 
2. Logs 'Server running on port: #DefinedPORT# ' when service is up

### APIS
1. /system-check/ping - to check the server status
      - method - GET
2. /system-check/info - to return server details (HDD, RAM, Active services)
      - method - GET 
