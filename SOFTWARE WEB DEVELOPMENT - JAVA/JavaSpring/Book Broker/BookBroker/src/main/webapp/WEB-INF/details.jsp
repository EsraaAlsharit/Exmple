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
                    <div class="d-flex justify-content-between align-items-center my-5">
                        <div>
                            <h1>
                                <c:out value="${Book.title}" />
                            </h1>
                            <p>Books form everyone's shelve:</p>
                        </div>

                        <a href="/books">back to the shelves</a>
                    </div>
                    <div class="my-5">
                        <h4>
                            <span class="text-danger">
                                <c:if test="${User.id == Book.user.id}">
                                    You
                                </c:if>
                                <c:if test="${User.id != Book.user.id}">
                                    <c:out value="${Book.user.userName}" />
                                </c:if>
                            </span>
                            Read
                            <span class="text-info">
                                <c:out value="${Book.title}" />
                            </span>
                            by
                            <span class="text-success">
                                <c:out value="${Book.author}" />
                            </span>
                        </h4>
                        <h6>Here are
                            <c:out value="${Book.user.userName}" />'s thoughts:
                        </h6>
                    </div>

                    <div>
                        <hr>
                        <c:out value="${Book.thoughts}" />
                        <hr>
                    </div>

                    <div class="d-flex justify-content-end">
                        <c:if test="${User.id == Book.user.id}">
                            <a href="/book/${Book.id}/edit" class="btn btn-secondary">edit</a>
                        </c:if>
                    </div>


                </div>
                
            </body>

            </html>