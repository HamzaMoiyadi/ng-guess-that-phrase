### Generate components inside a reusable module
`ng g c modules/<module-name>/components/<component-name> --module=modules/<module-name>/ --prefix=<whatever-is-proper>`

### push all local branches to remote
`git push origin --all`

### create service in ng8
`ng g s services/<name-of-service>/<name-of-service>`

**Angular 8 does not create folder-ed entities for services now


### create shareable module

`ng g module modules/<name-of-module>`


to understand double !, consider the example
if phraseSets has a truthy value, ! will make the value as falsy
another ! on top of that will make that falsy value to true
JS is weird. But this seems like a clean way to go on the boolean value