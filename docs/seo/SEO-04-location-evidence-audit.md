# SEO-04 — Location evidence and uniqueness audit

Status: In progress

## Purpose

Audit every indexable location page for local usefulness, uniqueness, unsupported claims, and over-reliance on shared SEO template copy before additional location expansion.

## Audit standard

A location page is considered **Strong / retain indexable** when it has substantial page-specific editorial content, meaningful local context, local service-use scenarios, internal links, and does not depend primarily on the generic `LocationSeoExtras` article to create page length.

A page is **Needs rewrite / hold** when most of its meaningful text comes from the shared location template, its page-specific section is short/generic, or it contains claims that require evidence such as 24/7 availability, certifications, reviews/testimonials, organic/premium-product guarantees, or specific operational promises.

File size is used only as a structural signal, not as a ranking factor. The decisive issue is whether the page contains independently useful local content beyond the shared template.

## Portfolio result

27 location pages are currently published.

### Strong / retain indexable

These pages contain materially larger, page-specific implementations and should be preserved while SEO-05 removes search-engine-facing prose and SEO-07 normalises their schema.

| Location | File | Approx source size | SEO-04 status |
| --- | --- | ---: | --- |
| Bloubergstrand | `Bloubergstrand.tsx` | 20.6 KB | Strong |
| Camps Bay | `CampsBay.tsx` | 20.9 KB | Strong |
| Claremont | `Claremont.tsx` | 21.1 KB | Strong |
| Constantia | `Constantia.tsx` | 21.2 KB | Strong |
| Durbanville | `Durbanville.tsx` | 21.9 KB | Strong |
| Goodwood | `Goodwood.tsx` | 20.4 KB | Strong |
| Green Point | `GreenPoint.tsx` | 21.3 KB | Strong |
| Sea Point | `SeaPoint.tsx` | 22.4 KB | Strong |

### Needs rewrite / hold from strong indexation

These pages are much smaller and depend heavily on the shared `LocationSeoExtras` article/FAQ block. They require page-specific evidence and useful local copy before being treated as equivalent SEO landing pages.

| Location | File | Approx source size | Main risk |
| --- | --- | ---: | --- |
| Bantry Bay | `BantryBay.tsx` | 4.3 KB | Thin local layer; shared-template dependence |
| Bishopscourt | `Bishopscourt.tsx` | 5.1 KB | Thin local layer; shared-template dependence |
| Clifton | `Clifton.tsx` | 5.1 KB | Thin local layer; shared-template dependence |
| De Waterkant | `DeWaterkant.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Franschhoek | `Franschhoek.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Fresnaye | `Fresnaye.tsx` | 5.1 KB | Thin local layer; shared-template dependence |
| Gardens | `Gardens.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Higgovale | `Higgovale.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Hout Bay | `HoutBay.tsx` | 4.9 KB | Thin local layer; shared-template dependence |
| Llandudno | `Llandudno.tsx` | 4.9 KB | Thin local layer; shared-template dependence |
| Mouille Point | `MouillePoint.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Newlands | `Newlands.tsx` | 4.9 KB | Thin local layer; shared-template dependence |
| Oranjezicht | `Oranjezicht.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Paarl | `Paarl.tsx` | 4.9 KB | Thin local layer; shared-template dependence |
| Rondebosch | `Rondebosch.tsx` | 4.8 KB | Thin local layer; shared-template dependence |
| Somerset West | `SomersetWest.tsx` | 5.6 KB | Template-heavy; requires evidence review |
| Stellenbosch | `Stellenbosch.tsx` | 5.5 KB | Unsupported 24/7/certification/testimonial copy found |
| Tamboerskloof | `Tamboerskloof.tsx` | 5.0 KB | Thin local layer; shared-template dependence |
| Tokai | `Tokai.tsx` | 5.4 KB | Template-heavy; requires evidence review |

## Systemic findings

### 1. Shared template creates near-duplicate editorial copy

`LocationSeoExtras.tsx` generates the same long article and six FAQs for most locations with the suburb name substituted. This means many smaller pages gain most of their word count from duplicated patterns rather than independent local usefulness.

### 2. Shared template includes SEO-facing prose

Examples include exact-match phrases such as `mobile spa Cape Town`, `facials Cape Town`, `mobile beauty services Cape Town`, and wording that reads as written for search engines rather than customers. This is the primary SEO-05 cleanup target.

### 3. Shared template still contains unsupported trust wording

The shared article includes `professional certified therapists`, plus claims about product/equipment standards and operational consistency that should only remain if the business can substantiate them.

### 4. Individual weak pages contain additional unsupported claims

Stellenbosch currently includes `Professional certified therapists`, `Premium organic products`, `Available 24/7`, and a named testimonial. These do not have repository evidence and should be removed or backed by a verified source before the page is promoted.

### 5. More location pages should not be created yet

The current portfolio already contains 19 pages that need stronger local evidence or rewriting. Expanding the location count before repairing them would increase thin/near-duplicate page risk.

## Rewrite evidence packet required for each held page

Before a held page is upgraded, aim to supply at least three of the following:

- actual service history or confirmed service coverage in the suburb;
- suburb-specific customer use case that is factual and non-identifying;
- genuine photo or media from work performed in/for that area;
- practical local arrival/access context (parking, estates, hotels, apartments, travel constraints) that is accurate;
- locally relevant treatment demand or customer scenario based on real operations;
- verified review/testimonial with source permission/reference;
- useful links to genuinely adjacent service areas.

## SEO-04 implementation decision

1. Retain the eight strong pages as the initial indexable location set.
2. Do not delete the remaining nineteen routes; they can still serve users and be rewritten incrementally.
3. Add temporary `noindex,follow` handling for the nineteen held routes and remove them from the sitemap in the implementation part of SEO-04/SEO-06.
4. Rewrite held pages one at a time when evidence is available; re-enable indexing only after review.
5. Do not create new suburb pages until the held backlog is substantially resolved.

## Next dependency

SEO-05 should first rewrite `LocationSeoExtras.tsx` so shared customer-facing copy is natural, concise and free of keyword-stuffed/search-engine-facing language. SEO-06 can then ensure the sitemap contains only pages intended for indexing and uses truthful `lastModified` values.
