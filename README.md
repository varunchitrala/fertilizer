# AGRIPEX — Agricultural Products & Solutions Website

A modern, responsive React website for **AGRIPEX Pesticide Fertilizer & Chemical Private Limited**. The project is designed as a professional agricultural-company website that communicates the company, presents its product range, builds credibility, and gives customers a clear path to enquire.

The current implementation is a **frontend application** built with React and Vite. It uses client-side routing for multiple pages and reusable components for shared UI and page-specific sections.

---

## 1. Project Purpose

The website follows a simple business communication flow:

**Attention → Trust → Relevance → Product → Proof → Enquiry**

The goal is not only to display products, but to present AGRIPEX as a professional agricultural business through:

- A strong agricultural hero section
- Company introduction and About information
- Product catalogue and individual product pages
- Agricultural field and company visual content
- Awards and recognition presentation
- Clear enquiry/contact journey
- Consistent corporate visual language
- Responsive layouts for desktop, tablet, and mobile

---

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | UI development and component architecture |
| Vite 8 | Development server and production build tooling |
| React Router DOM 7 | Client-side page routing |
| JavaScript (ES Modules) | Application logic |
| CSS | Page, component, responsive and animation styling |
| Oxlint | Code linting |
| Google Fonts | DM Sans and Manrope typography |
| Git / GitHub | Version control and source management |

The project does not currently require a backend or database for the website UI.

---

## 3. Main Pages

### Home — `/`

The homepage is the primary marketing entry point. Its current structure is:

1. Hero / featured agricultural messaging
2. About AGRIPEX preview
3. Why AGRIPEX / practical approach
4. Featured product range
5. Certifications and standards presentation
6. Field-oriented testimonials / perspectives
7. Footer

The Home page is intentionally an overview rather than a duplicate of the internal pages.

### About — `/about`

The About page explains the company and its approach to agriculture. It contains:

- About hero
- Company story
- Principles / values
- What AGRIPEX provides
- Mission and vision

### Products — `/products`

The Products page presents the complete catalogue in a grid-based layout. Each product card contains:

- Product image
- Product number
- Product name
- Short description
- More Details CTA

The catalogue currently contains **25 products**.

### Product Details — `/products/:productId`

Each product can have its own dedicated URL. The intended product-detail structure includes:

- Product image and introduction
- Product overview
- Key features
- Application guide
- Recommended crops
- Dosage
- Technical specifications
- Storage and caution information
- Manufacturer information
- Product enquiry CTA

At present, detailed technical data has been entered for the Calcium Nitrate product. Other catalogue products have routes generated from their slugs, but their full technical details still need verified source information before being published.

### Gallery — `/gallery`

The Gallery page presents agricultural imagery through:

- Visual-story hero section
- Gallery filters
- Responsive image grid
- Image hover interactions
- Lightbox image viewer
- Keyboard navigation using Escape / Left Arrow / Right Arrow
- Product exploration CTA

### Awards — `/awards`

The Awards page is structured for recognition and accreditation content. It includes:

- Awards hero
- Milestones
- Featured award / spotlight
- Category filtering
- Search
- Awards grid
- Certificate inspection modal
- CTA section

Award and accreditation content is maintained separately in the Awards data module.

### Contact — `/contact`

The Contact page provides the enquiry journey with:

- Contact hero
- Enquiry form
- Contact channels
- Closing CTA

The current form is a **frontend interaction**. Submission feedback is handled in the React UI; no production enquiry API/backend has been connected yet.

---

## 4. Routing

Routing is centralized in `src/App.jsx` using React Router.

Current routes:

```text
/                       Home
/about                  About
/products               Product catalogue
/products/:productId    Individual product details
/gallery                Gallery
/awards                 Awards & recognitions
/contact                Contact / enquiry
```

A shared `ScrollToTop` component is used with the router so navigation between pages starts from the appropriate scroll position.

---

## 5. Project Structure

```text
fertilizer/
├── public/
│   └── ... images and static assets
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Navbar.jsx
│   │   │   ├── BrandHeader.jsx
│   │   │   ├── TopBar.jsx
│   │   │   └── LanguageSwitcher.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── ScrollReveal/
│   │       ├── ScrollReveal.jsx
│   │       ├── ScrollReveal.css
│   │       └── index.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── components/
│   │   │       ├── Hero/
│   │   │       ├── AboutPreview/
│   │   │       ├── WhyChoose/
│   │   │       ├── FeaturedProducts/
│   │   │       ├── Certifications/
│   │   │       └── Testimonials/
│   │   │
│   │   ├── About/
│   │   │   └── components/
│   │   │       ├── AboutHero/
│   │   │       ├── AboutStory/
│   │   │       ├── AboutPrinciples/
│   │   │       ├── AboutSolutions/
│   │   │       └── AboutMission/
│   │   │
│   │   ├── Products/
│   │   │   ├── Products.jsx
│   │   │   └── components/
│   │   │       ├── ProductsHero/
│   │   │       ├── ProductCatalog/
│   │   │       └── ProductDetail/
│   │   │
│   │   ├── Gallery/
│   │   │   ├── GalleryPage.jsx
│   │   │   └── Gallery.jsx
│   │   │
│   │   ├── Awards/
│   │   │   ├── Awards.jsx
│   │   │   ├── data/
│   │   │   └── components/
│   │   │
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── components/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .oxlintrc.json
└── README.md
```

> The exact asset list may grow as additional agricultural, product, award, and company images are added.

---

## 6. Component Architecture

The project uses two levels of component organization.

### Shared components

Shared components are placed in `src/components/` and are intended to be reused across multiple pages.

Examples:

- `Header` — site-wide navigation and branding
- `Footer` — site-wide footer
- `ScrollReveal` — reusable reveal animation wrapper
- `ScrollToTop` — route navigation scroll handling

### Page-specific components

Components that belong to only one page are kept inside that page's directory.

For example:

```text
Home/
└── components/
    ├── Hero/
    ├── AboutPreview/
    ├── WhyChoose/
    ├── FeaturedProducts/
    ├── Certifications/
    └── Testimonials/
```

This keeps each page modular and makes individual sections easier to maintain.

---

## 7. Product Architecture

The product catalogue follows an e-commerce-style browsing pattern:

```text
Product Catalogue
       ↓
Product Card
       ↓
More Details
       ↓
/products/:productId
       ↓
Dedicated Product Detail Page
```

The catalogue currently contains these products:

1. Calcium Nitrate
2. 00:50:62
3. Calibor
4. 28:28:00
5. 25:25:25
6. 14:18:00
7. 03:50:50
8. 00:52:34
9. 00:09:46
10. 13:00:45
11. 22:22:11
12. 24:24:00
13. 00:42:47
14. 00:50:50
15. Nutrigen Potassium
16. Urea
17. 19:19:19
18. 00:32:34
19. 10:26:26
20. DAP
21. Bundha Special
22. O-Carb
23. Vadi Special
24. Nimatocide+
25. Ven Special

### Important product-data rule

Product names, specifications, dosage, crops, application methods, manufacturer information, and other technical claims should be verified against official product documentation before being added to product detail pages.

Do not invent technical specifications merely to complete a product page.

---

## 8. Visual Design System

The visual direction is intentionally:

**Agricultural + Established + Trustworthy + Premium + Corporate**

The design avoids a generic startup/SaaS appearance and instead uses:

- Deep agricultural greens
- Muted olive tones
- Warm gold accents
- Off-white / paper backgrounds
- Thin structural borders
- Large editorial typography
- Agricultural photography
- Controlled motion
- Clear CTA hierarchy

### Typography

The global stylesheet loads:

- **DM Sans** — body and interface text
- **Manrope** — major headings and display typography

### Global design tokens

The main colors are defined in `src/index.css` through CSS variables such as:

```css
--agri-forest
--agri-forest-deep
--agri-olive
--agri-gold
--agri-cream
--agri-paper
--agri-ink
--agri-muted
--agri-rule
```

A shared container width is also defined globally.

---

## 9. Motion & Interaction

Motion is used to support the interface rather than replace the content.

Current examples include:

- Hero slide transitions on Home
- Scroll reveal animations
- Product-card hover states
- Certification marquee
- Gallery image interactions
- Gallery lightbox navigation
- Awards certificate modal
- Gallery filtering
- Awards category/search filtering

Interactive pages also include reduced-motion handling where appropriate.

---

## 10. Accessibility Considerations

The UI includes several accessibility-oriented practices:

- Semantic page sections and headings
- `aria-label` / `aria-labelledby` where useful
- Descriptive image `alt` text
- Keyboard-accessible buttons
- Keyboard navigation in the gallery lightbox
- Escape key support for modal/lightbox closing
- Visible focus outlines
- Reduced-motion media queries for animated components

Accessibility should continue to be considered whenever new UI components are added.

---

## 11. Local Development

### Prerequisites

Install:

- Node.js
- npm
- Git

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will start the local development server and provide a local URL in the terminal.

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

The available npm scripts are defined in `package.json`. fileciteturn465file0L2-L2

---

## 12. Development Workflow

When modifying the project:

1. Identify whether the change is global, shared, or page-specific.
2. Reuse existing components when the responsibility is shared.
3. Keep page-specific sections inside the relevant page directory.
4. Keep JSX structure and CSS together for page-specific components.
5. Use React Router for page navigation rather than manually duplicating pages.
6. Verify responsive behavior after UI changes.
7. Run the production build and lint checks before considering a feature complete.
8. Use verified company/product information for public-facing claims.

---

## 13. Current Application Status

### Implemented

- React + Vite application
- React Router page navigation
- Shared Header and Footer architecture
- Home page
- About page
- Product catalogue
- Product-detail routing
- Calcium Nitrate detailed product page
- Gallery page with filters and lightbox
- Awards / recognition page structure
- Contact / enquiry page structure
- Responsive styling
- Scroll reveal interactions
- Global design system

The current router configuration contains the Home, About, Products, product-detail, Gallery, Awards, and Contact routes. fileciteturn466file0L2-L4

### Still to be completed / verified

- Add verified full technical information for the remaining product-detail pages
- Connect the Contact form to a real enquiry backend/email service
- Verify all company contact information and public-facing claims before production
- Replace any placeholder certification/recognition content with verified current documents
- Perform final desktop/tablet/mobile QA
- Run final production build and lint validation before deployment

---

## 14. Content & Trust Guidelines

Because this is a real agricultural-company website, public-facing content should be handled carefully.

### Use verified information for:

- Product specifications
- Dosage recommendations
- Crop recommendations
- Certifications
- Awards
- Company history
- Manufacturing claims
- Quality claims
- Pricing
- Performance claims

### Avoid:

- Fabricated testimonials
- Unverified certifications
- Invented product specifications
- Unsupported yield/performance promises
- Placeholder contact details in production
- Generic claims presented as official company facts

This keeps the website credible and suitable for a professional business audience.

---

## 15. Future Enhancements

Potential next-stage improvements include:

### Product system

- Centralize product data in a shared data module
- Add verified information for all products
- Add product categories and filtering
- Add product search
- Add downloadable product documents where available

### Enquiry system

- Connect the contact form to a backend/API
- Email notifications for enquiries
- Product-specific enquiry context
- Form validation and server-side protection

### Company content

- Verified certification documents
- Verified awards and recognitions
- Company milestones
- Dealer/distributor information
- Agricultural application/crop sections

### Production readiness

- SEO metadata per page
- Open Graph/social sharing metadata
- Sitemap and robots configuration
- Image optimization
- Performance audit
- Accessibility audit
- Cross-browser testing
- Deployment configuration

---

## 16. Repository

Source code is maintained in the GitHub repository:

**`varunchitrala/fertilizer`**

The project uses the `main` branch for the current website implementation.

---

## 17. Project Summary

AGRIPEX is being developed as a **professional agricultural-company website**, not simply as a collection of UI screens. The architecture separates reusable site components from page-specific sections, while React Router provides a clean multi-page experience within the Vite application.

The website's primary purpose is to communicate the company clearly, present its agricultural product range professionally, establish trust through verified information and recognitions, and convert visitors into product enquiries.
