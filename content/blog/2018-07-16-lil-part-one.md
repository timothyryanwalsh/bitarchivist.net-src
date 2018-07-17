+++
Title = "Harvard Library Innovation Lab Fellowship, Part One: What We Talk About When We Talk About PII"
date = "2018-07-16"
description = ""
tags = [ "digital archives", "Harvard LIL", "PII", "redaction"]
highlight = "true"
+++

# Introduction

Although it's hard to believe, it is already week 6 of my stint as a Summer Fellow at the Library Innovation Lab, housed within the Harvard Law School Library. In those six weeks, I have met and discussed my project with a number of people doing digital preservation in the Boston/Cambridge area and learned a lot from the LIL staff and other seven Summer Fellows. I've also spent a lot of time on my laptop coding - laying out the framework for a software application that I hope can help librarians and archivists better identify, review, and deal with personally identifiable information (PII) and other sensitive and confidential information in digital archives. I'll get more into the technical details of this application - which I'm calling Bulk Redactor - in a later post. But for now, its general purpose is to provide a browser-based dashboard and action layer on top of [bulk_extractor](https://www.forensicswiki.org/wiki/Bulk_extractor) that is designed to fit the needs of cultural heritage professionals rather than those digital forensics investigators and law enforcement.

But let's take a few steps back before we get into the details.

# Why focus on PII?

Digital preservation has become a much more commonplace activity in cultural heritage organizations in recent years, which is fantastic. More and more organizations have dedicated staff for digital preservation and digital archives, and, as evidenced by recent reports such as the [2017 NDSA Fixity Survey](https://osf.io/snjbv/) and the [Beyond the Repository](https://arch.library.northwestern.edu/concern/generic_works/00000009g) survey, organizations are now actively ingesting and preserving digital content at considerable scale.

Yet some common obstacles remain for those who are preserving our digital past. One such obstacle is the presence of PII and other sensitive information, such as Social Security Numbers, credit card numbers, phone numbers, email address, student records, and medical records, in records and data sets that we seek to preserve and make accessible to the public.

The presence (or potential presence) of such PII can be seriously problematic for those managing digital collections such as digital archives and research data sets for a number of reasons:

* PII is widespread in the records of many academics and professional offices, as well as in the personal digital archives of individuals from whom archives collect.
* PII is difficult to locate: it can exist in many types of files, as well as in unallocated space on disks, such as deleted files that have not yet been overwritten, swap space, and slack space.
* Management of PII is difficult to automate: matching by regular expression (in other words, by matching a particular pattern) can result in a large number of false positives.
* Donors trust collecting institutions to act in good faith and not to release potentially damaging PII publicly.
* Many types of PII, such as student and health records, are protected by law.

In practice, the presence or potential presence of PII often has the freezing effect of keeping collections in our backlogs and out of users' hands.

In their 2013 article In their 2013 article "[Security Without Obscurity: Managing Personally Identifiable Information in Born-Digital Archives](https://
scholarsphere.psu.edu/downloads/pnv9353523)," Ben Goldman and Timothy Pyatt give several real-life examples of how archivists have struggled to deal with this problem. In one quoted example from Stanford University, even use of Forensic Toolkit, a "best in class" digital forensics tool, led to less than ideal results:

> While the tool supports keyword and phrase searching within documents, as well as the identification of character strings reminiscent of credit card or social security numbers, the archivists found *the results to be imprecise at best, and misleading at worst*. Inundated with false positives, they realized that files would have to be individually examined in order to limit access to PII. Like Emory, they struggled to find a balance between access, privacy, and resource constraints: “*We also struggled with how much time and how many searches constitute ‘due diligence’* in searching for restricted information. We ran what we thought was an appropriate number of pattern and keyword searches, but it is always possible that some files containing private information may have slipped through the cracks. *(emphasis added)*

The past five years have not seen significant improvement: in [panel sessions at the December 2017 OSSArcFlow partner meeting](https://educopia.org/research/ossarcflow), Michael Olson of Stanford University and Jonathan Crabtree of the Odum Institute at UNC Chapel Hill described ongoing problems with PII, including dealing with false positives and needing to revert to human review of potential matches.

# The tools we use, and why it matters that they aren't built for us

In the current landscape, there are essentially three serious contenders for software tools to use in identifying PII:

* [Spirion](https://www.spirion.com/) (formerly Identity Finder)
* [Forensic Toolkit](https://accessdata.com/products-services/forensic-toolkit-ftk)
* [bulk_extractor](https://www.forensicswiki.org/wiki/Bulk_extractor)

To the best of my knowledge, a comprehensive comparison of the efficacy of these three tools for identifying PII doesn't exist. Applied against a standard set of test data, such a comparison might make an excellent research project.

Nevertheless, both Spirion and Forensic Toolkit are proprietary software that is only available after paying license costs that make them prohibitively expensive for many cultural heritage organizations. As proprietary software, users are also unable to modify them or incorporate them into new software development projects to better fit the needs of cultural hertiage professionals.

For these reasons, I decided that Bulk Redactor (currently in the exploratory prototype development phase) would use bulk_extractor as the underlying utility for identifying potential PII. bulk_extractor is a free (public domain) and open source, very efficient, highly customizable C++ program developed by Simson Garfinkel that scans both directories and disk images. It is already included in many digital forensics environments, including [BitCurator](https://confluence.educopia.org/display/BC) and [Kali Linux](https://www.kali.org/). Because bulk_extractor ignores the file system of targets it scans and can recursively decompress data while it scans, it is capable of identifying PII that other forensic tools may miss. It is also capable of scanning any kind of digital media, from hard drives to floppy disks to cell phones. All of these features make bulk_extractor an excellent choice for a PII scanner that can be wrapped within an overall review and redaction application. Anecdotally, bulk_extractor is also at least as effective as Forensic Toolkit and perhaps more effective at identifying PII in a given source.

But why wrap bulk_extractor within another application? After all, bulk_extractor and its GUI, BEViewer, are already installed in BitCurator. In short: because bulk_extractor is designed to identify the potential presence of PII, not to help the user then redact or otherwise manage it.

After all, bulk_extractor was designed for a very particular purpose: to help law enforcement quickly triage a piece of digital media to determine the presence or absence of incriminating information. It's instructive to consider the case studies presented in Garfinkel's 2013 article "[Digital media triage with bulk data analysis and bulk_extractor](https://www.sciencedirect.com/science/article/pii/S0167404812001472)":

* A case of credit card fraud, where investigators were able to quickly identify more than 10,000 credit card numbers as well as incriminating email addresses and internet history on a hard drive, which "helped to establish the defendant’s intent to commit fraud."
* A case of ATM fraud, where bulk_extractor was used to identify compromised credit card numbers on ATMs that had been suspected of containing skimmers and pinhole cameras.

Use cases in the [bulk_extractor User Manual](http://downloads.digitalcorpora.org/downloads/bulk_extractor/BEUsersManual.pdf) similarly describe how the tool can be used in investigations of potential malware, hacking, and identity theft; as well as how it can prove useful in cracking passwords.

In other words, bulk_extractor and its GUI are intended for use cases where the PII or sensitive information itself holds the highest evidentiary value (for law enforcement, courts, and, as the flipside of the same coin, hackers). Contrast this with the use cases of cultural heritage professionals, for whom the presence of PII is typically something to restrict for a period of time or entirely redact; in other words, an obstacle to sharing records that have an evidentiary value distinct from and greater than any PII they contain. For those of us in the latter camp, we need tooling that does more than print to a plain text file where potential PII may reside. We need tooling that can assist us in reviewing these results, screening out false positives, annotating where they lie and the terms of related restrictions in standards-based machine-actionable forms, and (ideally) automating some or all of the process of removing the offending content from disks and files. A tool that can automate all aspects of this process without the need for human judgment or intervention - and that works for all formats a digital archivist may encounter - may well prove to be infeasible, but I am convinced that there is both a need and opportunity for tooling that matches our use cases better than we can expect from tools designed for law enforcement.

# Moving forward

In subsequent blog posts, I'll discuss some of my research into redaction and de-identification of PII as well as use cases for Bulk Redactor, as well as the software development I've been doing this summer and my dreams and plans for continued work after this fellowship concludes. In the meantime, I'd love to hear from you -- do you experience problems with PII in your work? What tools and workflows are you using to manage PII? Have they proven effective? Please feel free to get in touch via Twitter (see button below) or [send me an email](mailto:timothyryanwalsh@gmail.com).