# Use Node 20 LTS
FROM node:20

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build app
RUN npm run build

# Expose port for Vite preview
EXPOSE 5173

# Start Vite preview server, allowing external hosts
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"]

