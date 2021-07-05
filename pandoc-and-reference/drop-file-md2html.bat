@echo off
set "filename=%1"

For %%A in ("%filename%") do (
pandoc -f markdown -t html5 %%~nxA --template template.txt -o %%~nA.html
)

