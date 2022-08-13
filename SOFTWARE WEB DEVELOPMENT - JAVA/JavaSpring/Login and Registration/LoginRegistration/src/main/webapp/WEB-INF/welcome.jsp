<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <title>Login & Registration</title>
            </head>

            <body>
                <div class="container my-5">
                    <h1 class="text-info">Welcome!
                        <c:out value="${User.userName}" />
                    </h1>
                    <p>This is your dashboard. Nothing to see here yet.</p>

                    <a href="/logout">logout</a>
                </div>
            </body>

            </html>