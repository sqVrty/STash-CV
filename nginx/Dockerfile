FROM nginx:stable-alpine
# COPY --from=frontend_build /app/client/dist /usr/share/nginx/html/client
COPY ./nginx/nginx.conf.template /etc/nginx/nginx.conf.template

# Install envsubst
RUN apk add --no-cache gettext

# Substitute environment variables and run Nginx
CMD ["sh", "-c", "envsubst '${NGINX_DOMEN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g 'daemon off;'"]