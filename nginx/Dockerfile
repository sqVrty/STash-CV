FROM node:alpine as frontend_build
WORKDIR /app
COPY ./client ./client
WORKDIR /app/client
RUN npm i
RUN npm run build

FROM nginx:stable-alpine
COPY --from=frontend_build /app/client/dist /usr/share/nginx/html/client
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
