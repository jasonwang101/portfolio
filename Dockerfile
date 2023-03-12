# use the nginx image
FROM nginx:latest

# copy the build output to replace the default nginx contents.
COPY ./dist/portfolio /etc/nginx/html

# Expose port 80
EXPOSE 80