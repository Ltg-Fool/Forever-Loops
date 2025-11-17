@echo off
if "%1"=="-n" (
    live-server --port=8000 --cors --no-browser build/
) else if "%1"=="-s" (
    live-server --port=8000 --cors --quiet build/
) else if "%1"=="-st" (
    if "%2"=="-n" (
        live-server --port=8000 --cors --no-browser build/standalone/
    ) else if "%2"=="-s" (
        live-server --port=8000 --cors --quiet build/standalone/
    ) else (
        live-server --port=8000 --cors build/standalone/
    )
) else (
    live-server --port=8000 --cors build/
)