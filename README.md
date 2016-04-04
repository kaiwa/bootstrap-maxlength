Twitter Bootstrap 3 jQuery maxlength plugin
===========================================

Appends a character countdown to input fields, showing the characters left until maxlength is reached.

![Screenshot](/bootstrap-maxlength-screenshot.png?raw=true "Bootstrap Maxlength Screenshot")

Try the [jsfiddle demo](https://jsfiddle.net/r9bjLax1/) to see it live!

Usage Example
-------------
```html
<div>
    <input type="text" maxlength="120" />
</div>

<!-- Adjust the path to your bootstrap-maxlength.js copy -->
<script src="/js/bootstrap-maxlength/bootstrap-maxlength.js"></script>

<!-- Apply maxlength() on all input fields which have a maxlength attribute -->
<script>
$(document).ready(function() {
    $("input[maxlength]").maxlength();
});
</script>
```
    
Installation
------------

### Download

Simply [download a zipped release](https://github.com/kaiwa/bootstrap-maxlength/releases), unpack it, then add the `bootstrap-maxlength.js` file to your project.

### Bower

Add the package `bootstrap-maxlength-simple` to your bower.json project file.

```javascript
{
    "name": "My Project",
    "dependencies": {
        "bootstrap-maxlength-simple": "3.*"
    }
}
```

Earlier versions
----------------

See 2.0 branch for a version which is compatible with Twitter Bootstrap 2.
