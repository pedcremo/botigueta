In order to run tests, you should:

1. Run `npm install` in the provided sample code
1. Start gulp using `./node_modules/gulp/bin/gulp.js watch`
1. Start karma using `./node_modules/karma/bin/karma start ./karma.local.conf.js`
1. You should take a look at the tests in `test.js` to see exactly what your AngularJS code should do.
1. Modify `controllers.js` and `templates/search_bar.html` as described below
until the tests pass and karma gives you the below output:

```

Ojo que cada vegada que canviem quelcom .js al frontend cal "COMPILAR"
frontend$ ./node_modules/gulp/bin/gulp.js browserify

Que ens generarà el bin/index.js que és un arxiu javascript on estan tots els .js
del projecte embeguts.
Això és així pq usem mòduls de nodeJS per al desenvolupamane (TO COMPLETE)
