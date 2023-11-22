FROM node:20.9.0 as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm i
COPY ./ /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf