set -e
zip -r build.zip build

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $netlify_key" \
     --data-binary "@build.zip" \
     https://api.netlify.com/build_hooks/5c3c7d665e17125d5191f501