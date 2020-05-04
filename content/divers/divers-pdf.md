# divers - pdf

## reduce pdf size

[How can I reduce the file size of a scanned PDF file? - askubuntu.com](https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file)

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```

with `-dPDFSETTINGS=/ebook` works well, a 15mo 300dpi file is reduced to a 3mo 150dpi file.
