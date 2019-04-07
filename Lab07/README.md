# **Application frameworks**
##### **Lab Session: Maven and Spring Boot**

**Objective:** Learn to configure the development environment with Maven for a simple Java project and for a Spring Boot MicroService.

1. Checking Java version and setup the environment variables.
Check existing java version:
```
    javac -version
```
- If this is not working even though Java is installed, you need to configure the following environment variables.
  - JAVA_HOME: Path to the parent directory of the Java installation.
  - PATH: Path to the ‘bin’ directory of the Java installation.
  
2. Setup Maven and configure the environment variables.
Maven is distributed as a zip file and can be configured at any place.
http://redrockdigimark.com/apachemirror/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.zip

Configuring maven:
- Following environment variables should be configured for working with maven.
  - MAVEN_HOME or M2_HOME: Path to the home directory of maven (root folder of extracted zip file).
  - PATH: Path to the ‘bin’ directory of the extracted location.
  
Note: This require the Java environment configurations to be configured as a prerequisite.
Check whether maven is working:
```
    mvn -v
```

3. Create a simple maven project with “quickstart” Maven Artifact.
   
4. Setting the manifest file for .jar
```html
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <configuration>
                    <archive>
                        <manifest>
                            <addClasspath>true</addClasspath>
                            <mainClass>com.mycompany.app.App</mainClass>
                        </manifest>
                    </archive>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

5. Implement and run a “Hello World” project with maven.
   
Use the main method of the application in the App.java file and write a simple print line statement.
```java
    System.out.println(“Hello Maven”);
```

Execute the following command in command line to compile and package the application.
```
    mvn clean compile package
```

Execute the following command to run the application using the jar file.
```
    java -jar <project_name>.jar
```
 (In the example the project_name is my-app)

6. Setting up a Spring-Boot Project.
- For setting up spring-boot projects main manifest setting is not needed and should be removed
- Setting the parent POM
```html
    <parent> 
        <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-parent</artifactId> 
        <version>1.5.2.RELEASE</version> 
    </parent>
```
- Setting spring-boot-starter-web dependency.

```html
    <dependency> 
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId> 
    </dependency>
```
- Setting spring boot maven build plugin for support features

```html
    <build> 
        <plugins> 
            <plugin> 
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId> 
            </plugin> 
        </plugins> 
    </build>
```

7. Modify the main class to become a Spring Boot application.
   
8. Create a GET method named greeting which returns a simple String value “Hello !”.
   
9.  Update the method so that it accepts a query parameter named ‘name’ and returns “Hello, {name}!”. Set a default value to that parameter.