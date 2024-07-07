#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Update package lists
echo "Updating package lists..."
apt-get update

# Install OpenJDK 11
echo "Installing OpenJDK 11..."
apt-get install -y openjdk-11-jdk

# Verify the installation
echo "Verifying Java installation..."
java -version
javac -version

# Change to the app directory
echo "Changing to the app directory..."
cd app

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Run npm audit to check for vulnerabilities
echo "Running npm audit fix..."
npm audit fix --force

# Continue with any other build steps (e.g., building the project)
echo "Building the project..."
npm run build

echo "Build script completed successfully."
