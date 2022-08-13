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
                            <c:out value="${Category.name}" />
                        </h1>
                        <h3 class="my-5">Products:</h3>
                        <div class="row">
                            <div class="col-6">
                                <ul>
                                    <c:forEach var="product" items="${Category.products}">
                                        <li>
                                            <c:out value="${product.name}" />
                                        </li>
                                    </c:forEach>
                                </ul>
                            </div>
                            <div class="col-6">
                                <form action="/AddProduct/${Category.id}" method="post">
                                    <label for="">Add Product</label>

                                    <select name="Category" id="" class="form-control">
                                        <c:forEach var="pro" items="${Product}">
                                            <option value="${pro.id}">
                                                <c:out value="${pro.name}" />
                                            </option>
                                        </c:forEach>
                                    </select>

                                    <div class="d-flex justify-content-end my-3">
                                        <input type="submit" value="Add" class="btn btn-primary">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </body>

                </html>