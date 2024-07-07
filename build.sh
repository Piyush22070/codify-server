#!/bin/bash

# Update package lists
apt-get update

# Install OpenJDK 11
apt-get install -y openjdk-11-jdk

# Check Java and Javac installation
java -version
javac -version

# Continue with your build commands
npm install
