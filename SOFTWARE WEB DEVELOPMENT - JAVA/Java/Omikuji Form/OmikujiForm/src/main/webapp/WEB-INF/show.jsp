<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
            <div class="row my-5 py-5">
                <div class="col px-5">
                    Send an Omikuji!
                    <div class="card p-5 bg-primary">
                        <p>
                            In
                            <c:out value="${year}" /> Years, you will live in
                            <c:out value="${city}" /> with
                            <c:out value="${name}" />
                            as your roommate,
                            <c:out value="${job}" /> for a living.
                            The next time you see a
                            <c:out value="${thing}" />, you will have good luck.
                            <c:out value="${something}" />
                        </p>
                    </div>
                </div>
            </div>

        </body>

        </html>