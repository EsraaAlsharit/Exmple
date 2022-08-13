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
                        <h1>New Dojo</h1>
                        <form:form action="/Dojo" method="post" modelAttribute="Dojo" class="my-2">
                            <div class="form-group my-2">
                                <form:label path="Name">Name:</form:label>
                                <form:errors path="Name" class="form-text text-danger" />
                                <form:input path="Name" class="form-control" />
                            </div>
                            <div class="d-flex justify-content-end">
                                <input type="submit" value="Create" class="btn btn-primary">
                            </div>
                        </form:form>
                    </div>
                </body>

                </html>