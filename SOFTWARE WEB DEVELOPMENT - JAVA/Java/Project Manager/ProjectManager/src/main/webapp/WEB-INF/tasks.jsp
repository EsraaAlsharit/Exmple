<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
                                    <h1>Project:
                                        <c:out value="${Project.title}" />
                                    </h1>
                                    <p>Project Lead:
                                        <c:out value="${Project.user.fname}" />
                                    </p>

                                </div>
                                <a href="/dashboard">back to Dashboard </a>
                            </div>
                            <div class="row mx-5">
                                <div class="col-9">
                                    <form:form action="/project/${id}/tasks" method="post" modelAttribute="Task">

                                        <div class="form-group my-3">
                                            <form:label path="taskMass">Add a task ticket for this team:</form:label>
                                            <form:input path="taskMass" class="form-control" />
                                            <form:errors path="taskMass" class="text-danger" />
                                        </div>

                                        <div class="form-group my-3 d-flex justify-content-between">

                                            <input type="submit" value="Submit" class="btn btn-primary " />

                                        </div>
                                    </form:form>
                                </div>

                                <div>
                                    <c:forEach var="task" items="${Tasks}">
                                        <h6>
                                            Added by
                                            <c:out value="${task.creator.fname}" />
                                            at
                                            <fmt:formatDate value="${task.createdAt}" pattern="hh:mm a MMM dd" />
                                        </h6>
                                        <p>
                                            <c:out value="${task.taskMass}" />
                                        </p>
                                    </c:forEach>
                                </div>

                            </div>
                        </div>
                    </body>

                    </html>