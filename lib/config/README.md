# Configuration Structure

This directory contains all configuration files organized in a modular structure.

## Global Configuration

**File:** `../config.ts` (parent directory)

Contains company-wide configurations that are used across the entire site:
- Company information (name, tagline, description)
- Contact information (address, phone, email)
- Navigation links
- Services
- Authorizations & Certifications
- Statistics
- Social media links
- Routes
- Why Choose Us

## Page-Specific Configurations

Page-specific configurations are stored in modular folders for better organization:

### Visa Configurations

**Directory:** `visa/`

#### Singapore Visa
**File:** `visa/singapore.ts`

Contains Singapore visa-specific configurations:
- AVA (Authorized Visa Agent) information
- Visa fees and breakdown
- Processing times
- Office hours
- External links (ICA, High Commission, etc.)
- PDF downloads
- FAQs

## Usage Examples

### Importing Global Config
```typescript
import { company, contact, services, routes } from "@/lib/config";
```

### Importing Page-Specific Config
```typescript
import { singaporeVisa, faqs, downloads, externalLinks } from "@/lib/config/visa/singapore";
```

## Adding New Page Configurations

When adding a new page-specific configuration:

1. Create a new folder under `lib/config/` (e.g., `lib/config/visa/malaysia.ts`)
2. Export all page-specific data from that file
3. Import it in the page component where needed

This keeps the global config clean and focused on company-wide data.

