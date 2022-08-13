<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

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

                <title>Login & Registration</title>
            </head>

            <body>
                <div class="container my-5">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 class="text-info">Welcome,
                                <c:out value="${User.userName}" />
                            </h1>
                            <p>Books form everyone's shelve:</p>
                        </div>

                        <div class="w-25 d-flex justify-content-between">
                            <a href="/logout">logout</a>
                            <a href="/book/new">+ Add a to my shelf!</a>
                        </div>
                    </div>

                    <table class="table table-bordered table-striped text-center">
                        <tr class="table-secondary">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author Name</th>
                            <th>Posted By</th>
                        </tr>
                        <c:forEach var="book" items="${Books}">
                            <tr>
                                <td>
                                    <c:out value="${book.id}" />
                                </td>
                                <td>
                                    <a href="/book/${book.id}">
                                        <c:out value="${book.title}" />
                                    </a>
                                </td>
                                <td>
                                    <c:out value="${book.author}" />
                                </td>
                                <td>
                                    <c:out value="${book.user.userName}" />
                                </td>
                            </tr>
                        </c:forEach>
                    </table>

                </div>
            </body>

            </html>