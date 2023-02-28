#1. Build applikasjonen - Vi ønsker å bygge applikasjonen for å se at den ikke får noen kompileringsfeil.
# a: For å bygge applikasjonen trenger vi dotnet's SDK-image. Dette har Microsoft lagt ut på nettet.
FROM mcr.microsoft.com/dotnet/sdk:6.0 as Build
# b: For å unngå å rote seg bort i ukjente mapper og filer ønsker vi å sette en WorkingDirectory.
WORKDIR /src
# c: Vi må kopiere prosjektet vårt inn til Docker slik at den kan bygge for oss.
COPY . .
# d: Vi ønsker å bygge en release-versjon og vite hvor vi plasserer "output"
RUN dotnet build "Internprosjekt_docker_containerisering.csproj" -c Release -o /app/build

#2. Publish applikasjonen. Vi ønsker å publisere applikasjonen for å lage en versjon som er klar for distribusjon til andre verter.
# a: Vi trenger kun å bygge en .dll og ikke en .exe
# b: Vi trenger å vite hvor vi plasserer "output"
RUN dotnet publish "Internprosjekt_docker_containerisering.csproj" -c Release -o /app/publish /p:UseAppHost=false


#3. Når publish-versjonen er klar ønsker vi å bygge et DockerImage basert på dette. 
# a: Vi trenger ikke dotnet's SDK-image. Vi ønsker å bruke dotnet's aspnet-image. Dette har Microsoft lagt ut på nettet.
#	   Fordi aspnet-imaget er optimalisert for kjøring i produksjon og inneholder ASP.NET Core, .NET runtimes og libraries. 
FROM mcr.microsoft.com/dotnet/aspnet:6.0 as final
# b: Ettersom vi har nytt base-image, ønsker vi å sette en ny WorkingDirectory.
WORKDIR /app
# c: Docker har et internt nettverk og vi må eksponere en port som vi kan bruke for å nå applikasjonen når den kjører.
EXPOSE 80
# d: Vi ønsker å hente innholdet fra vår tidligere published-versjon av applikasjonen og overføre det til vår nye WorkingDirectory
COPY --from=build /app/publish .
# e: Vi må spesifisere at containeren bygges som en "executeable"-applikasjon. Slik at når containeren startes, så kjøres en kommando,
#    og når kommandoen avsluttes, så stoppes containeren.
ENTRYPOINT ["dotnet", "Internprosjekt_docker_containerisering.dll"]