# Use an official Node.js runtime as a parent image
FROM node:17

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any dependencies
RUN npm install

# Make your app's port available to the outside world
EXPOSE 80

# Define environment variable (if needed)
ENV NODE_ENV=production

# Run your application when the container launches
CMD ["node", "server.js"]
