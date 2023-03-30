FROM gradle:8.0.2-jdk17-alpine AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon --stacktrace

FROM eclipse-temurin:17-jdk-alpine
VOLUME "/tmp"
ARG JAR_FILE="home/gradle/src/build/libs/*jar"
COPY --from=build ${JAR_FILE} app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar" ]
