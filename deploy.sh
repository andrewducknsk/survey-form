set -e

zip -r build.zip build

curl -X PUT https://api.netlify.com/api/v1/sites/fc7bdcf4-0afc-4bfd-b3a6-cf9a5f020d7e
     -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $netlify_key" \
     --data-binary "@build.zip" \