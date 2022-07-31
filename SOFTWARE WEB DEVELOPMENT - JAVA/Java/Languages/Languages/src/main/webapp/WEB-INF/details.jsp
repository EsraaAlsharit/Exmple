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
                                <h1></h1>
                                <div class="w-25 align-items-center d-flex justify-content-between">
                                    <a href="/Language">Dashboard</a>
                                </div>
                            </div>
                            <div class="my-2">
                                <h6 class="my-5">
                                    <c:out value="${Language.name}" />
                                </h6>
                                <h6 class="my-5">
                                    <c:out value="${Language.creator}" />
                                </h6>
                                <h6 class="my-5">
                                    <c:out value="${Language.currentVersion}" />
                                </h6>
                                <a class="my-5" href="/languages/${Language.id}/edit">Edit</a>
                                <br>
                                <h6 class="my-5">
                                    <form action="/Language/${Language.id}" method="post">
                                        <input type="hidden" name="_method" value="delete">
                                        <input type="submit" value="Delete"
                                            class="btn text-decoration-underline text-primary p-0">
                                    </form>
                                </h6>

                            </div>
                        </div>
                    </div>
                </body>

                </html>