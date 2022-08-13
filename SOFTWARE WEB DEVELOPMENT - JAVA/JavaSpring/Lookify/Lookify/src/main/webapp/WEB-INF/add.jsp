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
                                <div class="align-items-center d-flex justify-content-end">
                                    <a href="/dashboard">Dashboard</a>
                                </div>
                            </div>
                            <form:form action="/Lookify" method="post" modelAttribute="Lookify" class="my-2">

                                <div class="form-group my-2">
                                    <form:label path="title">Title</form:label>
                                    <form:errors path="title" class="form-text text-danger" />
                                    <form:input path="title" class="form-control" />
                                </div>
                                <div class="form-group my-2">
                                    <form:label path="artist">Artist</form:label>
                                    <form:errors path="artist" class="form-text text-danger" />
                                    <form:input path="artist" class="form-control" />
                                </div>
                                <div class="form-group my-2">
                                    <form:label path="rating">Rating(1-10)</form:label>
                                    <form:errors path="rating" class="form-text text-danger" />
                                    <form:input path="rating" class="form-control" />
                                </div>
                                <div class="d-flex justify-content-end">
                                    <input type="submit" value="Add Song" class="btn btn-primary">
                                </div>
                            </form:form>
                        </div>
                    </div>
                </body>

                </html>