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
                            <p>Hello,
                                <c:out value="${User.userName}" />. Welcome to..
                            </p>
                            <h1 class="text-info">The Book Broker!</h1>
                            <p>Available Book to Borrow</p>
                        </div>

                        <a href="/books">back to the shelves</a>
                    </div>

                    <table class="table table-bordered table-striped text-center">
                        <tr class="table-secondary">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author Name</th>
                            <th>Owner</th>
                            <th>Action</th>
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
                                <td class="d-flex align-items-center justify-content-around">
                                    <a href="/book/${book.id}/edit">edit</a>
                                    <form action="/Book/${book.id}" method="post">
                                        <input type="hidden" name="_method" value="delete">
                                        <input type="submit" value="delete"
                                            class="btn text-decoration-underline text-primary">
                                    </form>
                                    <form action="/Book/${book.id}/" method="post">
                                        <input type="hidden" name="_method" value="put">
                                        <input type="submit" value="borrow"
                                            class="btn text-decoration-underline text-primary">
                                    </form>
                                </td>
                            </tr>
                        </c:forEach>
                    </table>

                    <p>Books I'm Borrowing..</p>
                    <table class="table table-bordered table-striped text-center">
                        <tr class="table-secondary">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author Name</th>
                            <th>Owner</th>
                            <th>Action</th>
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
                                <td class="d-flex align-items-center justify-content-around">
                                    <form action="/Book/${book.id}/" method="post">
                                        <input type="hidden" name="_method" value="put">
                                        <input type="submit" value="return"
                                            class="btn text-decoration-underline text-primary">
                                    </form>
                                </td>
                            </tr>
                        </c:forEach>
                    </table>

                </div>
            </body>

            </html>