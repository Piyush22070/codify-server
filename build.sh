#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Update package list and install curl, gnupg
echo "Updating package lists and installing dependencies..."
sudo apt-get update -y
sudo apt-get install -y curl gnupg

# Install Node.js (using version 16)
echo "Installing Node.js..."
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Java JDK
echo "Installing Java JDK..."
sudo apt-get update -y
sudo apt-get install -y openjdk-11-jdk

# Verify installations
echo "Verifying installations..."
node -v
npm -v
java -version
javac -version

# Set working directory
echo "Setting up working directory..."
cd /usr/src/app

# Copy package.json and package-lock.json
echo "Copying package.json and package-lock.json..."
cp /path/to/your/project/package*.json .

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Copy the rest of the application code
echo "Copying application code..."
cp -r /path/to/your/project/* .

# Set environment variable for MongoDB URI
echo "Setting environment variable for MongoDB URI..."
export MONGODB_URI=mongodb+srv://piyush:piyush123@cluster0.gh7uisf.mongodb.net

# Expose port 3000 (adjust this according to your application settings)
echo "Exposing port 3000..."
sudo iptables -I INPUT -p tcp --dport 3000 -j ACCEPT

# Start the application
echo "Starting the application..."
npm start
