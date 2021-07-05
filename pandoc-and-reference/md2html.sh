#!/bin/sh

for filename in *.md; do
	pandoc -f markdown -t html5 "$filename" --template template.txt -o "${filename%%.*}".html 
done
