FROM quay.io/naveeddogar/kingmd
RUN git clone https://github.com/Tahul121/RAHUL-MD /root/Tahul121
WORKDIR /root/Tahul121/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
