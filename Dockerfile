FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLE 1

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
USER node
CMD ["npm", "start"]