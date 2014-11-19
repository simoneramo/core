## Core 1.0.0

Documentation - Very Soon



#### JADE Help

Jade to HTML help for newbies via NPM - html2jade
- https://www.npmjs.org/package/html2jade

This would have been installed via NPM install on setup,
if not...

$npm install html2jade - sudo if needed

$ html2jade (webpage).html -o .dev/jade-html

Will output raw HTML files into jade, you can find these files
in the root directory .dev/jade-html

or 

html2jade public/*.html  # converts all .html files to .jade
html2jade public/*.html -o .dev/jade-html # converts all .html files to .jade in .dev/jade-html

more help/options - https://www.npmjs.org/package/html2jade
