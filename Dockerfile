#
# Development stage 💻
#
FROM node:14-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build



#
# Production stage 🚀
#
FROM node:14-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the compiled JavaScript code and package.json
COPY --from=development /app/dist ./dist
COPY --from=development /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

LABEL app="pet-manager-backend"

# Command to run the application
CMD ["node", "dist/app.js"]