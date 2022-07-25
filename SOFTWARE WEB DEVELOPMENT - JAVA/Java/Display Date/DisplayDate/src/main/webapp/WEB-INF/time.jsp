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


      <script type="text/javascript" src="/js/app.js"></script>


      <title>Insert title here</title>
    </head>

    <body class="container h-50 my-5 py-5">

      <div class="d-flex justify-content-center mx-5">
        <h1 class="text-success">
          <c:out value="${time}" />
        </h1>
      </div>

    </body>

    </html>