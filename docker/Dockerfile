FROM node:5-wheezy

ADD ./start.sh /start.sh
RUN chmod u+x /start.sh

RUN mkdir -p /usr/src
WORKDIR /usr/src

RUN git clone https://github.com/jordond/hoogit /usr/src
RUN npm install --unsafe-perm

EXPOSE 8080

CMD [ "/start.sh" ]