FROM node
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
# Copy app source code
COPY . .
RUN npm install
#Expose port and start application
EXPOSE 9000
CMD [ "npm", "start" ]