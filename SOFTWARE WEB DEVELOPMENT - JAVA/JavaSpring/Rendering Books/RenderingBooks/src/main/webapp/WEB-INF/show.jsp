<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<title>Insert title here</title>
</head>
<body>
<div class="m-5">
<h1 class="my-2">
	<c:out value="${book.title}" />
	</h1>
	<h6>Description:
	<c:out value="${book.description}" />
	</h6>
	<h6>Language:
	<c:out value="${book.language}" /></h6>
	<h6>Number of f Pages:
	<c:out value="${book.numberOfPages}" />
	</h6>
</div>
	
</body>
</html>