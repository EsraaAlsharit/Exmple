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
<body class="m-auto">
    <div class="container my-5">
        <div class="form-group">
            <label for="">Your Gold:</label>
            <input type="number" name="num" disabled value="<c:out value='${num}'/>">
        </div>
        <div class="d-flex justify-content-between">
            <form action="/Add" method="post">
                
                <div class="form-group card p-2 text-center m-3 m-3">
                    <h3>Farm</h3>
                    <p>(earns 10-20 gold)</p>
                    <input type="hidden" name="form" value="farm">
                    <input type="submit" value="Find Gold!">
                </div>
            </form>
            <form action="/Add" method="post">
                
                <div class="form-group card p-2 text-center m-3 m-3">
                    <h3>Cave</h3>
                    <p>(earns 5-10 gold)</p>
                    <input type="hidden" name="form" value="cave">
                    <input type="submit" value="Find Gold!">
                </div>
            </form>
            <form action="/Add" method="post">
                
                <div class="form-group card p-2 text-center m-3 m-3">
                    <h3>House</h3>
                    <p>(earns 2-5 gold)</p>
                    <input type="hidden" name="form" value="house">
                    <input type="submit" value="Find Gold!">
                </div>
            </form>
            <form action="/Add" method="post">
                
                <div class="form-group card p-2 text-center m-3 m-3">
                    <h3>Casion!</h3>
                    <p>(earns/takes 0-50 gold)</p>
                    <input type="hidden" name="form" value="casion">
                    <input type="submit" value="Find Gold!">
                </div>
            </form>
        </div>

        <div class="form-group">
            <label for="">Activities</label><br>
            <div name="log" class="card">
                <c:forEach var="log" items="${logs}">
                <p class="m-0 <c:out value='${log.color}' />" >
					<c:out value="${log.mass}" />                    
				</p>
                </c:forEach>
            </div>
        </div>

    </div>
</body>
</html>