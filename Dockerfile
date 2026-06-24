FROM node:26-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# dev
FROM deps AS dev
WORKDIR /app
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# build
FROM deps AS build
WORKDIR /app
COPY . .
RUN npm run build

# prod
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80