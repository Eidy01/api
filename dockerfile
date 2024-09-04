FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -la /usr/src/app # Verificar la ubicación de los archivos

EXPOSE 3000

CMD ["node", "app.js"]
