# Build applikasjonen
# For å bygge applikasjonen trenger vi node-image.
FROM node:18.14.2-alpine as builder

# For å unngå å rote seg bort i ukjente mapper og filer ønsker vi å sette en WorkingDirectory.
WORKDIR /app

# Vi må kopiere package.json til Docker
COPY package.json .

# Vi installerer dependencies.
RUN yarn

# Vi kopierer resten av filene våre over til Docker.
COPY . .

# Vi utfører bygging av frontend-prosjektet.
RUN yarn build

# Bygg en Nginx-server til å "hoste" applikasjonen.
# For dette trenger vi nginx-image.
FROM nginx:1.22.1-alpine

# I Nginx sin default configuration ser den etter frontendfiler i /usr/share/nginx/html. 
# Vi kan endre dette med en nginx.conf-fil eller legge filer rett i mappen
# Derfor setter vi WORKDIR til /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
# Etter å ha satt WORKDIR ønsker vi å slette default "nginx-static-resource"-filene som ligger der.  
RUN rm -rf ./*
# Vi ønsker å hente innholdet fra vår tidligere build-versjon av applikasjonen og overføre det til vår posisjon
COPY --from=builder /app/build .
# Vi må spesifisere instruksjonen som applikasjonen i containeren skal kjøre.
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]