+++
Title = "CCA Tools"
date = "2017-04-17"
description = "Description of CCA Tools digital processing utilities"
tags = [
    "projects",
    "software dev",
    "python"
]
+++

# CCA Tools

CCA Tools are a set of GUI applications developed for triage, arrangement, and description of digital archives at the Canadian Centre for Architecture. The tools are written in Python and PyQT and are primarily intended for use within the [BitCurator](https://wiki.bitcurator.net/index.php?title=Main_Page) environment.

The aim of these tools is to create ready-to-ingest SIPs from disk images, directories, and individual digital files in a largely automated manner, and to pre-populate archival description sheets using information gleaned from DFXML files and Siegfried/Brunnhilde reports.

Tools include:

* [Disk Image Processor](https://github.com/timothyryanwalsh/cca-diskimageprocessor): Creates ready-to-ingest SIPs from a directory of disk images and related files and a pre-populated archival description spreadsheet.
* [Folder Processor](https://github.com/timothyryanwalsh/cca-folderprocessor): Creates ready-to-ingest SIPs from one or more directories on a local file system and a pre-populated archival description spreadsheet.
* [SIP Creator](https://github.com/timothyryanwalsh/cca-sipcreator): Creates ready-to-ingest SIP from user-selected directories and files and a pre-populated archival description spreadsheet.
* [DFXML Reader](https://github.com/timothyryanwalsh/dfxml-reader): Creates easy-to-read report of files recorded in a DFXML file, with a focus on MAC dates.

See more information (including installation and detailed usage instructions) on [Github](https://github.com/timothyryanwalsh/cca-tools).