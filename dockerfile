# Use an official Node.js runtime as the base image
FROM node:14.17.5

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Specify the command to run the Next.js server
CMD ["npm", "start"]