FROM node:12.10.0
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && apt-get install -yq google-chrome-stable
WORKDIR /amika-frontend
ENV PATH /amika-frontend/node_modules/.bin:$PATH
COPY package.json /amika-frontend/
RUN npm install -g npm && \
    npm install
EXPOSE 4200