
FROM node:20

COPY index.js /home/app/index.js

COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm i 

EXPOSE 5555

CMD ["node","index"]
