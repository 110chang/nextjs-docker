FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci 
COPY . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLE 1

ENV BASIC_AUTH_USER="user"
ENV BASIC_AUTH_PASSWORD="password"
ENV ENABLE_BASIC_AUTH="true"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

EXPOSE 3000
USER nextjs 
CMD ["npm", "start"]