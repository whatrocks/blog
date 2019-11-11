#!/bin/bash

echo "Let's create a new blog post..."
echo " "

function join_by { local IFS="$1"; shift; echo "$*"; }

WHOAMI=`whoami`
NAME=`id -F $WHOAMI`
TODAY=`date +%Y-%m-%d`

read -p "title: (My Cool New Blog Post) " title
title=${title:-My Cool New Blog Post}
lowercasetitle=`echo "$title" | awk '{print tolower($0)}'`
joined=`join_by - $lowercasetitle`
path=`echo /$joined`
read -p "date: ($TODAY) " date
date=${date:-$TODAY}
fullPath=`join_by - $date $lowercasetitle`
read -p "category: (music) " category
category=${category:-Deep Learning}
read -p "image: (cool.jpg) " image
image=${image:-cool.jpg}

echo " "
echo "Thanks, here's what we've got:"
echo " "

echo "title: $title"
echo "path: $path"
echo "date: $date"
echo "fullPath: $fullPath"
echo "category: $category"
echo "image: $image"

echo " "
echo "Creating a new blog post based on your input..."
mkdir "src/pages/${fullPath}"
mkdir "src/pages/${fullPath}/images"
echo "---
fullPath: \"${fullPath}\"
path: \"${path}\"
date: \"${date}\"
title: \"${title}\"
category: \"${category}\"
image: \"${image}\"
isBlogPost: true
---

## This is an h2

I'm a paragraph

    " >> src/pages/${fullPath}/index.md

echo " "
echo "Done!"
echo " "
echo "Let's start the blog dev server..."
npm run develop