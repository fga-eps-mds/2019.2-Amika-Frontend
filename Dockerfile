FROM node:latest
WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm install -g @angular/cli@8.3.4
COPY . /app/
CMD ng serve --host 0.0.0.0