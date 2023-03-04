# use the nginx image
FROM nginx:latest

COPY docker_entrypoint.sh /docker_entrypoint.sh

ENTRYPOINT ["/docker_entrypoint.sh"]

# copy the build output to replace the default nginx contents.
COPY ./dist/portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80