# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the scraping script and other necessary files
COPY warframeScraper.js ./

# Run the scraping script
CMD ["node", "warframeScraper.js"]
