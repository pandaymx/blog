FROM nginx:alpine
COPY src/.vuepress/dist /usr/share/nginx/html