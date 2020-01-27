# Tiny URL

 ## Starting the app
  ``npm run dev``
  
  ## API Doc
  
 Create short URL:
  ```
POST /short-it
{
    "url" : "http://google.com"
}
```

Redirect to URL:
 ```
GET /{short-url-hash}
```

Get most visited domains:
 ```
GET /recently-most-visited-domains
```
