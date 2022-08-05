# ubuntu - pdf

## réduire la taille d'un pdf

[Source forum Ubuntu](https://forum.ubuntu-fr.org/viewtopic.php?pid=3336511#p3336511)

```bash
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=out.pdf tonfichier.pdf
```
