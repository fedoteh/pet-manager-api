#
# Development stage 💻
#
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


#
# Build Stage 🔨
#
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the dependencies and source code from the development stage
COPY --from=development /app /app

# Compile TypeScript to JavaScript
RUN npm run build


#
# Production stage 🚀
#
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the compiled JavaScript code and package.json
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

LABEL app="pet-manager"

# Command to run the application and register module aliases 
# for absolute imports transpiled from TS to JS
CMD ["node", "-r", "module-alias/register", "dist/app.js"]