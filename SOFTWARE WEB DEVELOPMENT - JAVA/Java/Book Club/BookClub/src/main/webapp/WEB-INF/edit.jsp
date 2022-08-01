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
                        <div class="d-flex justify-content-between">
                            <div>
                                <h1>Add a Book to Your Shelf!</h1>
                                <p class="text-danger">Author must not be blank</p>
                            </div>
                            <a href="/books">back to the shelves</a>
                        </div>
                        <div class="row mx-5">
                            <div class="col-9">

                                <form:form action="/book/${id}/edit" method="post" modelAttribute="Book">
                                    <input type="hidden" name="_method" value="put">

                                    <div class="form-group my-3">
                                        <form:label path="title">Title</form:label>
                                        <form:input path="title" class="form-control" />
                                        <form:errors path="title" class="text-danger" />
                                    </div>
                                    <div class="form-group my-3">
                                        <form:label path="author">Author</form:label>
                                        <form:input path="author" class="form-control" />
                                        <form:errors path="author" class="text-danger" />
                                    </div>
                                    <div class="form-group my-3">
                                        <form:label path="thoughts">My thoughts</form:label>
                                        <form:textarea path="thoughts" class="form-control" />
                                        <form:errors path="thoughts" class="text-danger" />
                                    </div>

                                    <div class="form-group my-3 d-flex justify-content-end">
                                        <input type="submit" value="Submit" class="btn btn-primary my-3" />
                                    </div>
                                </form:form>
                            </div>
                            <div class="col-6">

                            </div>
                        </div>
                    </div>
                </body>

                </html>