FROM node:12.0-alpine
WORKDIR /amika-frontend
COPY package*.json ./
RUN npm install npm && \
    npm install
ENV PATH /amika-frontend/node_modules/.bin:$PATH
EXPOSE 4200
