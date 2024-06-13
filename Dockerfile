# Step 1: Build the React application
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Step 2: Serve the built application using a web server
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]