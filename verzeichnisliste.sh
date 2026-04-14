#!/bin/bash

find . \
  -path "./node_modules" -prune -o \
  -path "./build" -prune -o \
  -path "./.git" -prune -o \
  -print
