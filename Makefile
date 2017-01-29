heroku:
	heroku git:remote -a creep-mate
	boot build
	mv target target-tmp
	mv static.json static-tmp.json
	git checkout deploy
	rm -rf target
	mv target-tmp target
	mv static-tmp.json static.json
	git add -f target static.json
	git commit -m 'new build'
	git checkout -
	git push -f heroku deploy:master
