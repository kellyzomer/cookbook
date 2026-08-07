const template = document.createElement('template');
template.innerHTML=`
  <head>
    <meta name="description" content="Koken met Kell: wat eten we vandaag?">
      <meta name="author" content="Kelly Zomer">
      <meta name="robots" content="index, follow">
      <link rel="stylesheet" href="/style.css">
      <!-- Mobile friendly size -->
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
   </head>
   <header>
      <meta charset="utf-8">
      <a class="logo-link" href="/" aria-label="Koken met Kell">
         <img class="logo" src="/logo.png" alt="Koken met Kell">
      </a>
   </header>
`

document.body.prepend(template.content);
