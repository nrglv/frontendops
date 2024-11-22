FROM --platform=linux/amd64 node:12.2.0-alpine AS compile-image

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

FROM --platform=linux/amd64 nginx:1.17-alpine
RUN rm -rf /etc/nginx/conf.d/*
COPY --from=compile-image /app/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=compile-image  /app/dist /usr/share/nginx/html

EXPOSE 80