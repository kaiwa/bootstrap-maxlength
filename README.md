Twitter Bootstrap 3 jQuery maxlength plugin
===========================================

Appends a character countdown to input fields, showing the characters left until maxlength is reached.

Usage
-----

    <div>
        <input type="text" maxlength="120" />
    </div>

    <script>
    $(document).ready(function() {
        $("input[type='text']").maxlength();
    });
    </script>
    
Result:

![Alt text](/bootstrap-maxlength-screenshot.png?raw=true "Bootstrap Maxlength Screenshot")

Installation
------------

Add the `bootstrap-maxlength.js` file to your html source like this

    <script src="/js/bootstrap-maxlength/bootstrap-maxlength.js"></script>

### Download using Bower

Add the package `bootstrap-maxlength-simple` to your bower.json project file.

    {
        "name": "My Project",
        "dependencies": {
            "bootstrap-maxlength-simple": "3.*"
        }
    }

### Download without Bower

[Download a zipped release](https://github.com/kaiwa/bootstrap-maxlength/releases), unpack it, then add the `bootstrap-maxlength.js` file to your project.

Earlier versions
----------------

See 2.0 branch for a version which is compatible with Twitter Bootstrap 2.
