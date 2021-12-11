FROM node:16-alpine as build-stage

WORKDIR /app

COPY . ./

RUN yarn

RUN yarn build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/build /usr/share/nginx/html/

COPY --from=build-stage /app/docker/nginx.conf /etc/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
