# Use the official Node.js image as the base image
FROM node:16

# # Install dependencies
# RUN apt-get update && apt-get install -y \
#     curl \
#     gnupg \
#     && rm -rf /var/lib/apt/lists/*

# # Set working directory
# WORKDIR /usr/src/app

# # Install Node.js and npm
# RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
#     && apt-get install -y nodejs

# # Install Java JDK (optional, based on your needs)
# RUN apt-get update && apt-get install -y openjdk-11-jdk

# # Copy build script and make it executable
# COPY build.sh /usr/src/app/
# RUN chmod +x build.sh

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose port 3000 (or the port your Node.js application runs on)
# EXPOSE 3000

# # Set environment variable for MongoDB URI
# ENV MONGODB_URl=mongodb+srv://piyush:piyush123@cluster0.gh7uisf.mongodb.net

# # Start the application
# CMD ["npm", "start"]
