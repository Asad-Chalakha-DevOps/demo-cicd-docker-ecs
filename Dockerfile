FROM node:18
WOKDIR /app
COPY . .
RUN npm install 
EXPOSE 3000
CMD ["npm" , "start"]

