# Use the official Node.js image
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18 AS runner

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expose the Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
