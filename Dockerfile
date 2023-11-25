FROM node:20.9.0 AS node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
RUN npm run build

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx:alpine
COPY --from=node /app/dist/adopet-angular /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf