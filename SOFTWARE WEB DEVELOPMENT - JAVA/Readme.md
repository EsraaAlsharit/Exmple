### STS install
[Steps link](https://github.com/EsraaAlsharit/SDA_SoftwareDev/tree/main/SOFTWARE%20WEB%20DEVELOPMENT%20-%20JAVA/JavaOOP)

### STS for MYSQL
[]()

### Supported query method predicate keywords and modifiers
[STS Link](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#appendix.query.method.predicate)

### Package names

- `models`
- `services`
- `controllers`
- `repositories`

### file name for Templating jsp file 
- `WEB-INF`

### Dependencies
```md

    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>webjars-locator</artifactId>
        <version>0.30</version>
    </dependency>    
    <!-- BOOTSTRAP DEPENDENCIES -->
    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>bootstrap</artifactId>
        <version>5.0.1</version>
    </dependency>
    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>jquery</artifactId>
        <version>3.6.0</version>
    </dependency>
	<dependency>
		<groupId>org.apache.tomcat.embed</groupId>
		<artifactId>tomcat-embed-jasper</artifactId>
    </dependency>
	<dependency>
		<groupId>javax.servlet</groupId>
		<artifactId>jstl</artifactId>
	</dependency>    
 	<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency> 
    <dependency>
            <groupId>org.mindrot</groupId>
            <artifactId>jbcrypt</artifactId>
            <version>0.4</version>
    </dependency>
````

### app file
```md 
spring.datasource.url=jdbc:mysql://localhost:3306/schema
spring.datasource.username=root
spring.datasource.password=1234
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update

spring.mvc.hiddenmethod.filter.enabled=true

spring.mvc.view.prefix=/WEB-INF/

````
### jsp link for bootstrap
```md
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
````
### jsp link for dependencies

```md
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
                <%@ page isErrorPage="true" %>
            
````
