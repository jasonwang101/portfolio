# use the nginx image
FROM nginx:latest

# copy the build output to replace the default nginx contents.
COPY ./dist/portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80