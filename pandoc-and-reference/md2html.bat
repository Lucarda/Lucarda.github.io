@echo off

FORFILES /m *.md /C "cmd /c pandoc -f markdown -t html5 @FILE --template template.txt -o @FNAME.html"
