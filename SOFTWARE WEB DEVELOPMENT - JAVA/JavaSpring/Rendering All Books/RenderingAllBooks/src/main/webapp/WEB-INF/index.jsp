<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="ISO-8859-1">
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
            <div class="container my-5">
            <h1>All Books</h1>
                <table class="table table-bordered table-striped">
                    <tr class="table-secondary">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Language</th>
                        <th># Pages</th>
                    </tr>
                        <c:forEach var="book" items="${books}">
                        <tr >
                            <td>
                            <c:out value="${book.id}" />
                            </td>
                            <td>
                            <a href="books/<c:out value='${book.id}' />"><c:out value="${book.title}" /></a>
                            </td>
                            <td>
                            <c:out value="${book.language}" /></td>
                            <td>
                            <c:out value="${book.numberOfPages}" />
                            </td>
                        </tr>
                        </c:forEach>
                    </table>
            </div>
        </body>

        </html>