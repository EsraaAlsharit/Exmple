<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<c:forEach var="book" items="${books}">
	
	<h1>
	<c:out value="${book.title}" />
	</h1>
	<h6>
	<c:out value="${book.description}" />
	</h6>
	<h6>
	<c:out value="${book.language}" /></h6>
	<h6>
	<c:out value="${book.numberOfPages}" />
	</h6>
	</c:forEach>
	
	
</body>
</html>