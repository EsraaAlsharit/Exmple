<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <%@ page isErrorPage="true" %>
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

                        <div class="d-flex justify-content-between align-items-center my-3">
                            <div class="w-25 d-flex justify-content-between">
                                <a href="/songs/new">Add New</a>
                                <a href="/search/topTen">Top Songs</a>
                            </div>
                            <div class="d-flex justify-content-between">
                                <form action="/search" method="post">
                                    <input type="search" name="search" class="" placeholder="Search">
                                    <input type="submit" value="Search Artist" class="btn btn-secondary">
                                </form>
                            </div>
                        </div>

                        <table class="table table-bordered table-striped text-center">
                            <tr class="table-secondary">
                                <th>title</th>
                                <th>Rating</th>
                                <th>action</th>
                            </tr>
                            <c:forEach var="artist" items="${artists}">
                                <tr>
                                    <td>
                                        <a href="/Lookify/${artist.id}">
                                            <c:out value="${artist.title}" />
                                        </a>
                                    </td>
                                    <td>
                                        <c:out value="${artist.rating}" />
                                    </td>
                                    <td class="d-flex justify-content-around">

                                        <form action="/Lookify/${artist.id}" method="post">
                                            <input type="hidden" name="_method" value="delete">
                                            <input type="submit" value="delete"
                                                class="btn text-decoration-underline text-primary">
                                        </form>
                                    </td>
                                </tr>
                            </c:forEach>
                        </table>
                    </div>
                </body>

                </html>