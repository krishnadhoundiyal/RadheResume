FROM node:16.3-alpine as build
WORKDIR /app
COPY . ./
FROM nginx
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY package*.json .
RUN npm install -y
COPY . ./ 
RUN npm run build
COPY /app/build /usr/share/nginx/html/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]