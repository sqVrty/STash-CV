FROM nginx:stable-alpine
# COPY --from=frontend_build /app/client/dist /usr/share/nginx/html/client
COPY ./nginx/nginx.conf.template /etc/nginx/nginx.conf.template

# Install envsubst
RUN apk add --no-cache gettext

# Expose port 80 to the host
# EXPOSE 80

# Substitute environment variables and run Nginx
CMD ["sh", "-c", "envsubst '${NGINX_LOCAL_HOST} ${NGINX_DOMEN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
