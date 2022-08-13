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
                        <div>

                            <div class="d-flex justify-content-between">
                                <p>Top ten Songs:</p>
                                <div class="my-3 align-items-center d-flex justify-content-between">
                                    <a href="/dashboard">Dashboard</a>
                                </div>
                            </div>

                            <div class="card ">
                                <ul class="list-unstyled px-3 py-2">
                                    <c:forEach var="song" items="${Top_ten}">
                                        <li>
                                            <p>
                                                <c:out value="${song.rating}" />
                                                <a href="/Lookify/${song.id}">
                                                    <c:out value="${song.title}" />
                                                </a>-
                                                <c:out value="${song.artist}" />
                                            </p>
                                        </li>
                                    </c:forEach>
                                </ul>
                            </div>

                        </div>
                    </div>
                </body>

                </html>