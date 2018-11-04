+++
Title = "Software: Bulk Reviewer"
date = "2018-11-04"
description = "Description of Bulk Reviewer"
tags = [
    "projects",
    "software dev",
    "python",
    "javascript",
    "vue.js"
]
+++

# Bulk Reviewer

Bulk Reviewer is intended to help librarians, archivists, and others to identify, review, and remove sensitive files in directories and disk images. It is built using [Django](https://www.djangoproject.com/), [Django Rest Framework](http://www.django-rest-framework.org/), [Celery](http://www.celeryproject.org/), [Django Channels](https://channels.readthedocs.io/en/latest/), and [Vue.js](https://vuejs.org/). Bulk Reviewer scans directories and disk images for personally identifying information (PII) and other sensitive information using [bulk_extractor](https://github.com/simsong/bulk_extractor), a best-in-class digital forensics tool, and presents results in a review dashboard, enabling easier detection and dismissal of false positives. It provides the ability to generate CSV reports about inputs as well as the ability to export files from directories and disk images, separating problematic files from those that are free of sensitive information.

Initial development occurred while the author, Tim Walsh, was a 2018 Summer Fellow at the [Library Innovation Lab](https://lil.law.harvard.edu) at Harvard University. The application is currently under active development, and is still in the exploratory/prototype phase.

See more information on [Github](https://github.com/timothyryanwalsh/bulk-reviewer).