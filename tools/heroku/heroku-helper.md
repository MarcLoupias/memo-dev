### Heroku helper

[Tuto play] (https://devcenter.heroku.com/articles/getting-started-with-play#test-locally) but outdated (play 1.x)

Play infos ok
- [devcenter.heroku.com : play-support#play-2-2] (https://devcenter.heroku.com/articles/play-support#play-2-2)
- [playframework.com : 2.2.x/Production] (http://www.playframework.com/documentation/2.2.x/Production)

#### app url
`http://desolate-brook-9012.herokuapp.com/`

#### database config
```
mysql://<username>:<pwd>@us-cdbr-east-04.cleardb.com/heroku_blablabla
```

Heroku commands to set up env var with user/pwd

```
$ heroku config:set PPRB_DB_USER=<username>
$ heroku config:set PPRB_DB_PWD=<pwd>
```

#### mysql tools config
- [stackoverflow.com : remote-connect-to-cleardb-heroku-database] (http://stackoverflow.com/questions/9822313/remote-connect-to-cleardb-heroku-database) to configure mysql tools to reach prod database

#### commands

- créer une nouvelle app
```
$ heroku create
```

- lister les dyno installées et donner leur statut :
```
$ heroku ps
```

```
marco@debianmarco:~/dev/poc-play-rest-backend$ heroku ps
=== web (1X): `target/start -Dhttp.port=${PORT} ${JAVA_OPTS} -DapplyEvolutions.default=true -Ddb.default.driver=com.mysql.jdbc.Driver -Ddb.default.url=${CLEARDB_DATABASE_URL}`
web.1: crashed 2014/01/10 13:57:53 (~ 8m ago)
```

- déployer le code de la branche courante sur heroku. Heroku build l'app sur cette base.
```
$ git push heroku master
```

- setter une seule dyno (gratuit)
```
$ heroku ps:scale web=1
```

- from the project root dir to get logs from heroku in your play logs dir
```
$ heroku logs > logs/heroku.log
```

#### common errors

* heroku bash: target/start: No such file or directory

- [stackoverflow.com : crashes-after-deploying] (http://stackoverflow.com/questions/19085213/scala-play-2-2-application-crashes-after-deploying-in-heroku-target-start-no-su)
- [discussion.heroku.com : no-such-file-or-directory] (https://discussion.heroku.com/t/bash-target-start-no-such-file-or-directory-error-after-upgrading-to-play-2-2/163)

* heroku <any_command> returns '! App not found' after renaming an app in dashboard

- [stackoverflow.com : heroku app not found] (http://stackoverflow.com/questions/7615807/renamed-heroku-app-from-website-now-its-not-found) Need to update the remote entry in `project/.git/config` file with the new name !!
