FROM harbor.wdabuliu.com/note/nginx:v1

RUN echo 'Asia/Shanghai' >/etc/timezone
RUN rm /usr/share/nginx/html/index.html

RUN mkdir /usr/share/nginx/html/aiWave
COPY dist/ /usr/share/nginx/html/aiWave
COPY conf/default.conf /etc/nginx/conf.d
COPY conf/nginx.conf /etc/nginx
