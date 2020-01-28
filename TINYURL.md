## Tiny URL shortening system

1. It is a mechanism where we are assigning hash aliases to the long and robust URLs, where those aliases redirect users to their respective sites, when visited.
2. Main value and purpose is to have user friendly URLs in your emails for example, or tweets (Twitter have limit on number of characters), they are tinier and less likely to mistype.
   A high traffic companies could use this feature for example, if they are providing their users with some feeds or notifications.
3. The main mechanism is to generate unique, URL friendly hash, to distinguish long aliases.

   There are few ways to generate has for short URL. md5 one which has drawbacks of collision (even more if we pick only first few characters of md5 hash) but advantage of generating always same hash for same URLs (preserving storage). 
   
   The other one is to use some random identifier (ID or counter), in conjunction with base62. Base62 because of many possible combinations, if we choose 7 characters long hash, it will be possible to generate 62^7 combinations.

4. The main challenge for me is to generate always unique tiny URL for high traffic scalable system. 
    For example, if we have multiple tinyUrl microservices, with configured load balancer, they would need some centralized place to keep track of used unique counter which will be used to generate unique tiny URL.
    
5. The advance feature will be, for example, caching system, data cache (Redis, Memcached) or http cache (CDN).
   If system requires from us to generate tiny urls with expiration dates, that expiration date can be used as TTL for that resource in cache.
   
   For scalable system, we should have some distributed services in use, mentioned cache should be distributed cache, which would be used by all microservices. 
   
   Also, some durable and high available centralized service which will store configuration for our microservices, and provide them with random counters to work with.