FROM node:alpine as frontend_build
WORKDIR /app
COPY ./client ./client
WORKDIR /app/client
RUN npm i
RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=frontend_build /app/client/dist /usr/share/nginx/html/client

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
