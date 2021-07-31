# divers - pdf

## reduce pdf size

[How can I reduce the file size of a scanned PDF file? - askubuntu.com](https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file)

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```

with `-dPDFSETTINGS=/ebook` works well, a 15mo 300dpi file is reduced to a 3mo 150dpi file.

## merge several pdf in one

[How to merge several PDF files? - askubuntu.com](https://askubuntu.com/questions/2799/how-to-merge-several-pdf-files)

```bash
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -dAutoRotatePages=/None -sOutputFile=finished.pdf  file1.pdf file2.pdf
```

```bash
gs         starts the Ghostscript program.
-dBATCH    once Ghostscript processes the PDF files, it should exit.
           If you don't include this option, Ghostscript will just keep running.
-dNOPAUSE  forces Ghostscript to process each page without pausing for user interaction.
-q         stops Ghostscript from displaying messages while it works
-sDEVICE=pdfwrite
           tells Ghostscript to use its built-in PDF writer to process the files.
-sOutputFile=finished.pdf
           tells Ghostscript to save the combined PDF file with the specified name.
-dAutoRotatePages=/None
           Acrobat Distiller parameter AutoRotatePages controls the automatic orientation selection algorithm: For instance: -dAutoRotatePages=/None or /All or /PageByPage.
```

Your input files don't even need to be PDF files. You can also use PostScript or EPS files, or any mixture of the three.
