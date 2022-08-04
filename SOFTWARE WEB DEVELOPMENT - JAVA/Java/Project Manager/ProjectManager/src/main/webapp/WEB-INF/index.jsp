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

                    <title>Project Manager</title>
                </head>

                <body>
                    <div class="container my-5">
                        <div class="">
                            <div class="w-50 d-flex justify-content-between align-items-center">
                                <h3 class="text-info">Welcome,
                                    <c:out value="${User.fname}" />!
                                </h3>
                                <a href="/logout">logout</a>
                            </div>
                            <div class="d-flex justify-content-between align-items-center my-3">
                                <p>All Projects</p>

                                <a href="/project/new" class="btn btn-info text-light">+ new project</a>
                            </div>
                        </div>

                        <table class="table table-bordered table-striped text-center">
                            <tr class="table-secondary">
                                <th>Project</th>
                                <th>Team Lead</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                            <c:forEach var="project" items="${projects}">
                                <c:if test="${project.user.id != User.id}">
                                    <tr>
                                        <td>
                                            <a href="/project/${project.id}">
                                                <c:out value="${project.title}" />
                                            </a>
                                        </td>
                                        <td>
                                            <c:out value="${project.user.fname}" />
                                        </td>
                                        <td>
                                            <fmt:formatDate value="${project.dueDate}" pattern="MMM dd" />
                                        </td>
                                        <td class="d-flex align-items-center justify-content-around">

                                            <form action="/project/${project.id}/joinin" method="post">
                                                <input type="submit" value="Join team"
                                                    class="btn text-decoration-underline text-primary">
                                            </form>

                                            <!-- <c:out value="${project.getMembers().size()}" /> -->

                                        </td>
                                    </tr>
                                </c:if>
                            </c:forEach>
                        </table>

                        <p>Your Projects</p>
                        <p>

                        </p>

                        <table class="table table-bordered table-striped text-center">
                            <tr class="table-secondary">
                                <th>Project</th>
                                <th>Team Lead</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>

                            <c:forEach var="project" items="${yourProjects}">
                                <tr>
                                    <td>
                                        <a href="/project/${project.id}">
                                            <c:out value="${project.title}" />
                                        </a>
                                    </td>
                                    <td>
                                        <c:out value="${project.user.fname}" />
                                    </td>
                                    <td>
                                        <fmt:formatDate value="${project.dueDate}" pattern="MMM dd" />
                                    </td>
                                    <td class="d-flex align-items-center justify-content-around">

                                        <!-- <form action="/project/${project.id}/outjoin" method="post">
                                            <input type="submit" value="Leave team"
                                                class="btn text-decoration-underline text-primary">
                                        </form> -->
                                        <!-- <c:out value="${project.getMembers().size()}" /> -->


                                        <c:if test="${project.user.id == User.id}">
                                            <a href="/project/${project.id}/edit">edit</a>
                                        </c:if>
                                        <c:if test="${project.user.id != User.id}">
                                            <form action="/project/${project.id}/outjoin" method="post">
                                                <input type="submit" value="Leave team"
                                                    class="btn text-decoration-underline text-primary">
                                            </form>
                                        </c:if>
                                    </td>
                                </tr>
                            </c:forEach>
                            <!-- <c:forEach var="project" items="${User.projects}">
                                <tr>
                                    <td>
                                        <a href="/project/${project.id}">
                                            <c:out value="${project.title}" />
                                        </a>
                                    </td>
                                    <td>
                                        <c:out value="${project.user.fname}" />
                                    </td>
                                    <td>
                                        <fmt:formatDate value="${project.dueDate}" pattern="MMM dd" />
                                    </td>
                                    <td class="d-flex align-items-center justify-content-around">

                                        <c:if test="${project.user.id == User.id}">

                                            <a href="/project/${project.id}/edit">edit</a>
                                        </c:if>

                                    </td>
                                </tr>
                            </c:forEach> -->
                        </table>

                    </div>
                </body>

                </html>