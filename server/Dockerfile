# Build image starting with node 
FROM node:10 

ADD . /code 

# Create working directory 
WORKDIR /code

RUN npm install 

# CMD to start server 
CMD ["node", "index.js"]