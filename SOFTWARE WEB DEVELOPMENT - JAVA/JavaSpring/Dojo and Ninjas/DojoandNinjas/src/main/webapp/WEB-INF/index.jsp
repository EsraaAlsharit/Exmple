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
                        <h1>
                            <c:out value="${Dojo.name}" /> Location Ninjas
                        </h1>
                        <table class="table table-bordered table-striped text-center">
                            <tr class="table-secondary">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                            <c:forEach var="ninja" items="${Dojo.ninjas}">
                                <tr>
                                    <td>
                                        <c:out value="${ninja.fname}" />
                                    </td>
                                    <td>
                                        <c:out value="${ninja.lname}" />
                                    </td>
                                    <td>
                                        <c:out value="${ninja.age}" />
                                    </td>
                                </tr>
                            </c:forEach>
                        </table>


                    </div>
                </body>

                </html>