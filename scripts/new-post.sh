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
read -p "category: (Deep Learning) " category
category=${category:-Deep Learning}
read -p "markdown: (true) " markdown
markdown=${markdown:-true}
isMarkdown="false"
if [ "$markdown" == "true" ]; then
    isMarkdown="true"
fi
read -p "image: (qp-fast.jpg) " image
image=${image:-qp-fast.jpg}

echo " "
echo "Thanks, here's what we've got:"
echo " "

echo "title: $title"
echo "path: $path"
echo "date: $date"
echo "fullPath: $fullPath"
echo "category: $category"
echo "markdown: $isMarkdown"
echo "image: $image"

echo " "

if [ "$isMarkdown" == "true" ]; then
echo "Creating a new Markdown blog post based on your input..."
mkdir "src/pages/${fullPath}"
mkdir "src/pages/${fullPath}/images"
echo "---
fullPath: \"${fullPath}\"
path: \"${path}\"
markdown: ${isMarkdown}
date: \"${date}\"
title: \"${title}\"
category: \"${category}\"
image: \"${image}\"
isBlogPost: true
---

## This is an h2

I'm a paragraph

    " >> src/pages/${fullPath}/index.md
fi

if [ "$isMarkdown" != "true" ]; then
echo "Creating a new React blog post based on your input..."
mkdir "src/pages/${fullPath}"
mkdir "src/pages/${fullPath}/images"
echo "import React, { Component } from \"react\";
import Template from \"../../templates/blog-post\";

export const frontmatter = {
  fullPath: \"${fullPath}\",
  path: \"${path}\",
  date: \"${date}\",
  title: \"${title}\",
  category: \"${category}\",
  markdown: false,
  image: \"${image}\",
  isBlogPost: true
};

const template = { markdownRemark: { frontmatter } };

export default function Post({pageContext}) {
  const { imagesInPost } = pageContext
  return (
    <Template data={template}>
      <CustomPost images={imagesInPost} />
    </Template>
  );
}

// This is where you write the post!
class CustomPost extends Component {
  render() {
    const { images } = this.props;
    return (
      <div>
        <h2>I'm a header</h2>
        <p>I'm some words.</p>
      </div>
    );
  }
}" >> src/pages/${fullPath}/index.js
fi

echo " "
echo "Done!"
echo " "
echo "Let's start the blog dev server..."
yarn develop