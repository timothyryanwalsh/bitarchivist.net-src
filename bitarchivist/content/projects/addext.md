+++
Title = "Software: addext"
date = "2017-11-25"
description = "Description of addext, a tool for adding file extensions for files without them based on a PRONOM identification"
tags = [
    "projects",
    "software dev",
    "python"
]
+++

# addext

addext is a Python-based command-line tool to add file extensions to files without them, based on their PRONOM identifiers (PUIDs).

![addext](/img/addext.png)

The user can choose to use an existing DROID CSV file to give format identifications to addext, or to let addext identify files itself using Siegfried. Once a file format identification has been made, addext checks the associated file extensions for that format in PRONOM. By default, addext will then add the first file extension listed for the format in PRONOM if the file does not already have that extension.

See more information (including installation and detailed usage instructions) on [Github](https://github.com/timothyryanwalsh/addext).