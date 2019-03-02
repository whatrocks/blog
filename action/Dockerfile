FROM debian:9.5-slim

LABEL "com.charlieharrington.actions.name"="Hello, world!"
LABEL "com.charlieharrington.actions.description"="Write args to the standard output"
LABEL "com.charlieharrington.actions.icon"="mic"
LABEL "com.charlieharrington.actions.color"="green"

LABEL "repository"="http://github.com/whatrocks/blog"
LABEL "homepage"="https://www.charlieharrington.com"
LABEL "maintainer"="Charlie Harrington <charlie@whatrocks.org>"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]