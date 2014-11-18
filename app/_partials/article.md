## Jade Changed

This is a simple example showing how to use a conditional to check which environment Harp is running in, in Jade.

```jade
h1 Harp is in #{ environment }
if environment == "production"
  p See? Harp is in production mode.
else
 p Okay, Harp is in development mode right now.
```

```html
h1 Harp is in #{ environment }
<h1>hello?<h1>
```