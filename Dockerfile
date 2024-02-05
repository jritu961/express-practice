    FROM node:18-alpine
    # ENV NODE_ENV=development
    WORKDIR /index
    COPY package*.json ./
    COPY . .
    RUN npm install 
    CMD [ "node", "index.js" ]
    EXPOSE 3000