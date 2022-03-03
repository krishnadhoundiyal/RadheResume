FROM node:16.3-alpine as build
WORKDIR /app
COPY . ./
FROM nginx
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
RUN npm build run
#COPY --from=build /app/build /usr/share/nginx/html
COPY /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]