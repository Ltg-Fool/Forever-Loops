@echo off
if "%1"=="-n" (
    live-server --port=8000 --cors --no-browser build/
) else if "%1"=="-q" (
    live-server --port=8000 --cors --quiet build/
) else if "%1"=="-r" (
    if "%2"=="-n" (
        live-server --port=8000 --cors --no-browser
    ) else if "%2"=="-q" (
        live-server --port=8000 --cors --quiet
    ) else if "%2"=="-nq" (
        live-server --port=8000 --cors --quiet --no-browser
    ) else (
        live-server --port=8000 --cors
    )
) else (
    live-server --port=8000 --cors build/
)