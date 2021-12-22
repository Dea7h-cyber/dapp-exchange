FROM nginx:alpine

COPY /docker/nginx.conf /etc/nginx/

RUN rm -rf /usr/share/nginx/html/*

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
