# Assignment: Sports ORM I
### Objectives:
- Practice using more advanced queries
<hr>
Using the sports_orm, complete all the following queries and show their results on index.html.

The purpose of this assignment is to practice using the Django ORM to make queries on a pre-existing database. You MUST install the sports_orm before you can complete this assignment. In your Django folder, run this terminal command:`` https://github.com/TheCodingDojo/sports_orm.git` This will create a folder named `sports_orm`; if you `cd` into this new folder, `python mangage.py migrate` and `python manage.py runserver`, you should see lists of sports leagues, teams, and players. Your goal for this assignment is to modify `leagues/views.py` and/or `leagues/templates/leagues/index.html` so that instead the page shows:

1...all baseball leagues
2...all womens' leagues
3...all leagues where sport is any type of hockey
4...all leagues where sport is something OTHER THAN football
5...all leagues that call themselves "conferences"
6...all leagues in the Atlantic region
7...all teams based in Dallas
8...all teams named the Raptors
9...all teams whose location includes "City"
10...all teams whose names begin with "T"
11...all teams, ordered alphabetically by location
12...all teams, ordered by team name in reverse alphabetical order
13...every player with last name "Cooper"
14...every player with first name "Joshua"
15...every player with last name "Cooper" EXCEPT those with "Joshua" as the first name
16...all players with first name "Alexander" OR first name "Wyatt"

Hint: Try editing the context dictionary for these queries!

```md
context = {
	# commenting out the "leagues" key so they don't conflict
	# "leagues": League.objects.all(),
	"teams": Team.objects.all(),
	"players": Player.objects.all(),
	# query 1: All baseball leagues
	"leagues": League.objects.something(something=something),
}
````
