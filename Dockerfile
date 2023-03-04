### Build step ###
# use the node image to build this angular app
FROM node:latest as build

# set the work directory
WORKDIR /usr/local/app

# add the source code to the app
COPY ./ /usr/local/app

# clean dependencies rebuild
RUN npm ci

# generate the dist build
RUN npm run build

### Deploy step ###
# use the nginx image
FROM nginx:latest

# copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80