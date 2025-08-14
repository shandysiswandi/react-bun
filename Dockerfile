FROM oven/bun:1.2.20-alpine AS builder
WORKDIR /app
COPY package.json bun.lock .
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:1.29-alpine
LABEL maintainer="shandysiswandi@gmail.com"
LABEL description="Production image for React application."
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
RUN chown -R appuser:appgroup /var/cache/nginx && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid && \
    chown -R appuser:appgroup /usr/share/nginx/html
USER appuser
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]