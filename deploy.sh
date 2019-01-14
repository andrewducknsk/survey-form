set -e

zip -r build.zip build

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $netlify" \
     --data-binary "@build.zip" \
     -X PUT https://api.netlify.com/api/v1/sites/fc7bdcf4-0afc-4bfd-b3a6-cf9a5f020d7e