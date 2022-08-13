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
                        <table class="table table-bordered table-striped text-center">
                            <tr class="table-secondary">
                                <th>Name</th>
                                <th>Creator</th>
                                <th>Version</th>
                                <th>action</th>
                            </tr>
                            <c:forEach var="Language" items="${Languages_name}">
                                <tr>
                                    <td>
                                        <a href="/languages/${Language.id}">
                                            <c:out value="${Language.name}" />
                                        </a>
                                    </td>
                                    <td>
                                        <c:out value="${Language.creator}" />
                                    </td>
                                    <td>
                                        <c:out value="${Language.currentVersion}" />
                                    </td>
                                    <td class="d-flex justify-content-around">
                                        <a href="/languages/${Language.id}/edit">Edit</a>

                                        <form action="/languages/${Language.id}" method="post">
                                            <input type="hidden" name="_method" value="delete">
                                            <input type="submit" value="delete"
                                                class="btn text-decoration-underline text-primary">
                                        </form>
                                    </td>
                                </tr>
                            </c:forEach>
                        </table>
                        <div>
                            <h2>Track an Language:</h2>
                            <p class="text-danger">Description must not be blank</p>
                            <form:form action="/languages" method="post" modelAttribute="Language" class="my-2">

                                <div class="form-group my-2">
                                    <form:label path="name">Language Name:</form:label>
                                    <form:errors path="name" class="form-text text-danger" />
                                    <form:input path="name" class="form-control" />
                                </div>
                                <div class="form-group my-2">
                                    <form:label path="creator">Creator:</form:label>
                                    <form:errors path="creator" class="form-text text-danger" />
                                    <form:input path="creator" class="form-control" />
                                </div>
                                <div class="form-group my-2">
                                    <form:label path="currentVersion">Current Version:</form:label>
                                    <form:errors path="currentVersion" class="form-text text-danger" />
                                    <form:input path="currentVersion" class="form-control" />
                                </div>

                                <div class="d-flex justify-content-end">
                                    <input type="submit" value="Submit" class="btn btn-primary">

                                </div>
                            </form:form>
                        </div>


                    </div>
                </body>

                </html>