set -e
zip -r build.zip build

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $netlify_key" \
     --data-binary "@build.zip" \
     https://api.netlify.com/api/v1/sites