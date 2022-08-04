<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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

                            <h1>
                                Project Details
                            </h1>

                            <a href="/dashboard">back to Dashboard</a>
                        </div>
                        <div class="my-5">
                            <table class="table table-borderless">
                                <tr>
                                    <td>Project:</td>
                                    <td>
                                        <c:out value="${Project.title}" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>
                                        <c:out value="${Project.description}" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Due Date:</td>
                                    <td>
                                        <fmt:formatDate value="${Project.dueDate}" pattern="MMM dd" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/project/${Project.id}/tasks">See tasks</a>
                                    </td>
                                </tr>

                            </table>
                            <!-- <ul>
                                <c:forEach var="user" items="${Project.members}">
                                    <li>
                                        <c:out value="${user.fname}" />
                                    </li>
                                </c:forEach>
                            </ul> -->
                        </div>



                        <div class="d-flex justify-content-end">
                            <c:if test="${Project.user.id == User.id}">
                                <form action="/Project/${Project.id}" method="post">
                                    <input type="hidden" name="_method" value="delete">
                                    <input type="submit" value="Delete Project" class="btn btn-danger">
                                </form>
                            </c:if>
                        </div>


                    </div>

                </body>

                </html>