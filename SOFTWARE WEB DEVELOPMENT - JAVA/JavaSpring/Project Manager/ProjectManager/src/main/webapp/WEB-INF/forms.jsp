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

                    <title>Project Manager</title>
                </head>

                <body>
                    <div class="container my-5">
                        <div class="text-center">
                            <h1 class="text-info ">Project Manager</h1>
                            <p>A place for teams to manage projects.</p>
                        </div>

                        <div class="row mx-5">
                            <div class="col-6">
                                <h3>Register</h3>
                                <form:form action="/register" method="post" modelAttribute="newUser">
                                    <div class="form-group">
                                        <label>First Name:</label>
                                        <form:input path="fname" class="form-control" />
                                        <form:errors path="fname" class="text-danger" />
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name:</label>
                                        <form:input path="lname" class="form-control" />
                                        <form:errors path="lname" class="text-danger" />
                                    </div>
                                    <div class="form-group">
                                        <label>Email:</label>
                                        <form:input path="email" class="form-control" />
                                        <form:errors path="email" class="text-danger" />
                                    </div>
                                    <div class="form-group">
                                        <label>Password:</label>
                                        <form:password path="password" class="form-control" />
                                        <form:errors path="password" class="text-danger" />
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password:</label>
                                        <form:password path="confirm" class="form-control" />
                                        <form:errors path="confirm" class="text-danger" />
                                    </div>
                                    <input type="submit" value="Register" class="btn btn-primary my-3" />
                                </form:form>
                            </div>
                            <div class="col-6">
                                <h3>Login</h3>
                                <form:form action="/login" method="post" modelAttribute="newLogin">
                                    <div class="form-group">
                                        <label>Email:</label>
                                        <form:input path="email" class="form-control" />
                                        <form:errors path="email" class="text-danger" />
                                    </div>
                                    <div class="form-group">
                                        <label>Password:</label>
                                        <form:password path="password" class="form-control" />
                                        <form:errors path="password" class="text-danger" />
                                    </div>
                                    <input type="submit" value="Login" class="btn btn-success my-3" />
                                </form:form>
                            </div>
                        </div>
                    </div>
                </body>

                </html>