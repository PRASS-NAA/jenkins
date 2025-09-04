FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . ./

EXPOSE 5173

CMD ["nom", "run", "dev"]
