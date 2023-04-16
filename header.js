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
      <h1>Koken met Kell</h1>
   </header>
`

document.body.prepend(template.content);