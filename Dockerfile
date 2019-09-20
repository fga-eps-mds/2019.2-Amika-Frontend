FROM node:12.10.0
WORKDIR /amika-frontend
COPY package*.json /amika-frontend/
RUN npm install -g npm && \
    npm install && \
    npm install -g @angular/cli@8.3.4
COPY . /amika-frontend/
EXPOSE 4200
CMD ng serve --host 0 --port 4200