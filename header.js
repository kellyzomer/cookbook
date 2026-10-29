[
  ['charset', 'utf-8'],
  ['name', 'viewport', 'width=device-width, initial-scale=1'],
  ['name', 'description', 'Koken met Kel: wat eten we vandaag?'],
  ['name', 'author', 'Kelly Zomer'],
  ['name', 'robots', 'index, follow']
].forEach(([attribute, name, content]) => {
  const meta = document.createElement('meta');
  if (attribute === 'charset') meta.setAttribute(attribute, name);
  else {
    meta.setAttribute(attribute, name);
    meta.content = content;
  }
  document.head.append(meta);
});

// Use the SVG brand mark on pages without a favicon link in their own head.
const hasFavicon = Array.from(document.querySelectorAll("link")).some(link =>
  link.rel === "icon"
);
if (!hasFavicon) {
  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/svg+xml";
  favicon.href = "/favicon.svg";
  document.head.append(favicon);
}

const header = document.createElement('header');
header.innerHTML = `
  <h1 class="site-name"><a class="brand-link" href="/">Koken met Kel</a></h1>
  <p class="site-tagline"><span class="typewriter">Gewoon lekker eten</span></p>
`;
document.body.prepend(header);
