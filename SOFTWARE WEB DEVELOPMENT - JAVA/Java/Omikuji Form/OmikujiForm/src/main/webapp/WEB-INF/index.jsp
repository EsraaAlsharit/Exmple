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
                    <h1> Send an Omikuji!</h1>
                    <div class="card p-5">
                        <form action="/" method="POST">
                            <div class="form-group my-2">
                                <label for="exampleInputEmail1">Pick any number from 5 to 25</label>
                                <input type="number" min="5" max="25" name="year" class="form-control">
                            </div>
                            <div class="form-group my-2">
                                <label for="exampleInputEmail1">Enter the name of any city </label>
                                <input type="text" class="form-control" name="city" id="exampleInputEmail1">
                            </div>
                            <div class="form-group my-2">
                                <label for="exampleInputEmail1">Enter the name of any real person</label>
                                <input type="text" class="form-control" name="name" id="exampleInputEmail1">
                            </div>
                            <div class="form-group my-2">
                                <label for="exampleInputEmail1">Enter any type of living thing.</label>
                                <input type="text" class="form-control" name="thing" id="exampleInputEmail1">
                            </div>
                            <div class="form-group my-2">
                                <label for="exampleInputEmail1">Say something nice to someone:</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="something"
                                    rows="3"></textarea>
                            </div>
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                Send and show a friend
                            </small><br>
                            <input type="submit" class="btn btn-primary" value="Send">
                        </form>
                    </div>
                </div>
            </div>

        </body>

        </html>