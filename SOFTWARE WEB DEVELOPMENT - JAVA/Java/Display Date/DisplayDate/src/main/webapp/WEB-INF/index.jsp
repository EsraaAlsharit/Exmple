<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="UTF-8">
      
      <!-- for Bootstrap CSS -->
      <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
      <!-- YOUR own local CSS -->
      <link rel="stylesheet" href="/css/main.css" />
      <!-- For any Bootstrap that uses JS or jQuery-->
      <script src="/webjars/jquery/jquery.min.js"></script>
      <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>




      <title>Insert title here</title>
    </head>

    <body class="container">

      <div class="d-flex justify-content-between my-5 py-5 h-50">
        <a href="/date" onclick="myFunction()">Date Template</a>

        <a href="/time" onclick="myFunction()">Time Template</a>
      </div>

    </body>

    </html>