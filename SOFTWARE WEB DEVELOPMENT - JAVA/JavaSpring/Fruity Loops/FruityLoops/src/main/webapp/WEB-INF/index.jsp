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

    <body>
      <div class="container my-5 py-5">
        <h1 class="text-danger">Fruit Store</h1>

        <div class="">
          <table class="table table-bordered border border-danger">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <c:forEach var="fruit" items="${fruits}">
              <tr>
                <td>
                  <c:out value="${fruit.name}" />
                </td>
                <td>
                  <c:out value="${fruit.price}" />
                </td>
              </tr>
            </c:forEach>
          </table>
        </div>
      </div>
    </body>

    </html>