# IPLFantasy
Fantasy App for Indian Premier League. The project is in it's very initial stages of development currently and we only intend to create a very minimum viable product until we deploy this project. 
<br> **Mainly for people new to Spring and React**
<br> **Tech stack:** 
<br> Framework - Spring boot with Maven build 
<br> Backend - Java
<br> Frontend - React.js
<br> Database Server - MySQL
## Please follow the following guidelines to develop further on this project:
1. Clone this repo(Obviously!)
2. Download IntelliJ Ultimate(since we're using it as an IDE!)
3. Download Node.JS and npm to handle react stuff
4. After you clone this repo and download IntelliJ. Open the project in IntelliJ, go to the pom.xml file, right click and select Build as a Maven Project. This should import all the dependencies. 
5. to start the dev server for viewing and making changes in the frontend, go to the frontend/ directory and execute ` npm install` and `npm start` on command line. 
6. If you want your dev server to be able to talk to the REST APIs, open IntelliJ and execute `clean install` in the Maven command line, run the project normally or run the .JAR file created in the target/ directory. Now, your dev server is ready to talk to the backend! 

### Follow these steps to configure MySQL to the Spring Boot Application:
1. Download MySQL from https://mysql.com.
2. Update the pom.xml to have `<dependency> <groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-data-jpa</artifactId></dependency><dependency><groupId>mysql</groupId><artifactId>mysql-connector-java</artifactId></dependency><dependency>` (You won't need to do this if you're cloning/pulling from this repo) 
3. **MANDATORY** Create a database on mysql using the following steps: `mysql -u root -p`, then enter your password and execute `create database iplfantasy_db`. 
4. Modify the file application.properties according to your own need to configure Hibernate to SQL. 
4. For the rest, if you have pulled/cloned the most recent version of the project, you're good to go!
