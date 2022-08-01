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
                                <h1>Expense Detai:</h1>
                                <a href="/api/Expenses">Go Back</a>
                            </div>
                            <div class="my-2">
                                <h6>Expense Name:
                                    <c:out value="${PokeBook.name}" />
                                </h6>
                                <h6>Expense Description:
                                    <c:out value="${PokeBook.description}" />
                                </h6>
                                <h6>Vendor:
                                    <c:out value="${PokeBook.vender}" />
                                </h6>
                                <h6>Amount Spent:
                                    <c:out value="${PokeBook.amount}" />
                                </h6>
                            </div>
                        </div>
                    </div>
                </body>

                </html>