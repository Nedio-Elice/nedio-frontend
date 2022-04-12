FROM node:16.13.0

COPY . .

RUN npm install

CMD npm run build && npm run start:prod
