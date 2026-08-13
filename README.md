# Azure Jewelry Website

Premium static catalog site for **Azure Jewelry** — fine jewelry, exceptional gemstones, and private inquiry via WhatsApp or phone.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Update contact details

Edit `src/data/site.ts`:

```ts
contact: {
  whatsapp: "12125551234",      // digits only, country code included
  phone: "+1 (212) 555-1234",   // display format
  phoneHref: "+12125551234",    // tel: link
  email: "inquire@example.com",
  location: "United States",
  hours: "By appointment",
},
```

Until these are filled, WhatsApp / Call buttons route to the Contact section.

## Add a product

Edit `src/data/products.ts` — add an object with:

- `id`, `slug`, `name`, `category`, `gemstone`
- `description`, `craftsmanship`, `certification?`
- `collection`, `featured`, `images`, `alt`

Place images in `public/images/`.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- No cart, checkout, or accounts — conversion is the conversation
