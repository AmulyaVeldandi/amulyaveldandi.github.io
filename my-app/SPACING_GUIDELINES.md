# Portfolio Spacing & Padding Guidelines

> **Last Updated:** October 26, 2025
> **Status:** ✅ All spacing issues have been fixed and standardized

---

## 📐 **Spacing Scale Reference**

Use this consistent scale throughout your portfolio:

| **Tailwind Class** | **Pixel Value** | **Use Case** |
|-------------------|-----------------|--------------|
| `p-2` / `m-2` / `gap-2` | 8px | Tight spacing, badges, small icons |
| `p-4` / `m-4` / `gap-4` | 16px | Default spacing, paragraph margins, small cards |
| `p-6` / `m-6` / `gap-6` | 24px | Card padding (mobile), grid gaps |
| `p-8` / `m-8` / `gap-8` | 32px | Large card padding, desktop grid gaps |
| `p-12` / `m-12` | 48px | Section spacing (mobile) |
| `p-16` / `m-16` | 64px | Section spacing (tablet) |
| `p-20` / `m-20` | 80px | Major section spacing |
| `p-24` / `m-24` | 96px | Hero sections, major divisions |
| `p-32` / `m-32` | 128px | Extra large spacing |

---

## 🎯 **Component-Specific Spacing**

### **1. Main Layout Container**
```tsx
// ✅ CORRECT - Standardized container
<main className="flex-1 w-full max-w-7xl mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
  {children}
</main>

// ❌ INCORRECT - Non-standard values
<main className="px-5 lg:px-12 xl:px-16">
```

**Specifications:**
- Max width: `max-w-7xl` (1280px)
- Mobile padding: `px-4` (16px)
- Tablet padding: `sm:px-6` (24px)
- Desktop padding: `lg:px-8` (32px)
- Top padding: `pt-32` (128px) - Accounts for fixed nav
- Bottom padding: `pb-24` (96px)

---

### **2. Buttons**

```tsx
// Size variants with standardized padding
const sizeClasses = {
  sm: "px-4 py-2",      // Small: 16px x 8px
  md: "px-6 py-3",      // Medium: 24px x 12px
  lg: "px-8 py-4",      // Large: 32px x 16px
};
```

**Button Spacing Rules:**
- Always use `gap-2` between icon and text
- Button groups: `gap-4` between buttons
- Maintain `min-h-tap` (44px) for accessibility

---

### **3. Cards**

#### **Small Cards** (Metrics, Badges)
```tsx
className="p-4"  // 16px all around
```

#### **Medium Cards** (Features, Skills)
```tsx
className="p-6 sm:p-8"  // 24px mobile → 32px tablet+
```

#### **Large Cards** (Sections, Containers)
```tsx
className="p-6 sm:p-10 lg:p-12"  // 24px → 40px → 48px
```

**Card Border Radius:**
- Small elements: `rounded-2xl` (16px)
- Cards: `rounded-3xl` (24px)
- Large sections: `rounded-[2.5rem]` (40px)

---

### **4. Grid Layouts**

#### **Card Grids** (Features, Projects, Skills)
```tsx
// ✅ CORRECT
className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"

// ❌ INCORRECT - Inconsistent gaps
className="grid gap-5 sm:gap-6 lg:gap-8"
```

#### **Tight Grids** (Badges, Tags)
```tsx
className="flex flex-wrap gap-2 sm:gap-3"
```

**Grid Specifications:**
- **Card grids:** `gap-6 md:gap-8` (24px → 32px)
- **Tight grids:** `gap-2 sm:gap-3` (8px → 12px)
- **List items:** `space-y-2` or `space-y-3`

---

### **5. Navigation**

```tsx
// Nav container
<nav className="hidden items-center gap-3 lg:flex">
  // Nav items list
  <ul className="flex items-center gap-2 ...">
    // Individual nav items
    <li className="px-4 py-2 ...">
```

**Navigation Spacing:**
- Container to nav items: `gap-3` (12px)
- Between nav items: `gap-2` (8px)
- Nav item padding: `px-4 py-2` (16px x 8px)
- Mobile menu button: `min-h-tap min-w-tap` (44px)

---

### **6. Footer**

```tsx
// ✅ CORRECT
<footer className="section-spacing px-6 py-12 sm:px-10 sm:py-16">
  <div className="flex flex-col gap-6 sm:flex-row ...">
    // Social icons
    <div className="flex gap-4">
```

**Footer Specifications:**
- Padding: `px-6 py-12 sm:px-10 sm:py-16`
- Main sections gap: `gap-6`
- Social icons gap: `gap-4` (16px)
- Internal sections: `mt-8` (32px)

---

### **7. Forms**

```tsx
// Form container
<form className="flex flex-col gap-4 p-6 sm:p-8">
  // Field grid
  <div className="grid gap-4 sm:grid-cols-2">
    // Individual field
    <label className="flex flex-col">
      <input className="mt-2 px-4 py-3" />  // All inputs: py-3
    </label>
  </div>
</form>
```

**Form Specifications:**
- Form container: `p-6 sm:p-8`
- Field gaps: `gap-4` (16px)
- Label to input: `mt-2` (8px)
- Input padding: `px-4 py-3` (16px x 12px)
- Textarea padding: `px-4 py-3` (same as inputs)

---

### **8. Section Spacing**

```tsx
// Between sections
<section className="section-spacing">
  // Section internal spacing
  <div className="space-y-8 lg:space-y-10">
```

**Section Specifications:**
- Between major sections: Use `.section-spacing` class
- `.section-spacing` = `mb-12 sm:mb-16 lg:mb-20` (48px → 64px → 80px)
- Section internal: `space-y-6 lg:space-y-8` or `space-y-8 lg:space-y-10`
- Hero sections: `pb-24 pt-32` (96px bottom, 128px top)

---

## 🎨 **Custom CSS Utilities**

These utilities are available in `globals.css`:

### **Card Padding Classes**
```css
.card-padding-sm    /* p-4 (16px) */
.card-padding-md    /* p-6 sm:p-8 (24px → 32px) */
.card-padding-lg    /* p-6 sm:p-10 lg:p-12 (24px → 40px → 48px) */
```

### **Grid Gap Classes**
```css
.grid-gap-cards     /* gap-6 md:gap-8 (24px → 32px) */
.grid-gap-tight     /* gap-2 sm:gap-3 (8px → 12px) */
```

### **Section Spacing Classes**
```css
.section-spacing           /* Vertical spacing between sections */
.section-vertical-spacing  /* mb-12 sm:mb-16 lg:mb-20 */
```

---

## ✅ **Changes Made (Oct 26, 2025)**

### **Fixed Files:**

1. **[app/layout.tsx](app/layout.tsx#L74)**
   - Changed: `px-5 sm:px-8 lg:px-12 xl:px-16` → `px-4 sm:px-6 lg:px-8`
   - Changed: `max-w-prose-wide` → `max-w-7xl`

2. **[components/shared/Button.tsx](components/shared/Button.tsx#L38-L40)**
   - Small: `px-4 py-2.5` → `px-4 py-2`
   - Medium: `px-5 py-3` → `px-6 py-3`
   - Large: `px-7 py-3.5` → `px-8 py-4`

3. **[components/layout/Navigation.tsx](components/layout/Navigation.tsx#L146-L147)**
   - Nav container: `gap-2` → `gap-3`
   - Nav list: `gap-1` → `gap-2`

4. **[components/layout/Footer.tsx](components/layout/Footer.tsx#L26)**
   - Changed: `py-10 sm:py-12` → `py-12 sm:py-16`

5. **[components/contact/ContactForm.tsx](components/contact/ContactForm.tsx#L64-L76)**
   - All inputs: `py-2` → `py-3` (standardized)

6. **[components/home/FeatureHighlights.tsx](components/home/FeatureHighlights.tsx#L9-L14)**
   - Grid: `gap-5 sm:gap-6 lg:gap-8` → `gap-6 md:gap-8`
   - Cards: `p-6 sm:p-7 lg:p-8` → `p-6 sm:p-8`

7. **[components/about/StorySection.tsx](components/about/StorySection.tsx#L53-L81)**
   - Impact grid: `gap-4 sm:gap-5` → `gap-4 md:gap-6`
   - Values grid: `gap-5 md:gap-6` → `gap-6 md:gap-8`

8. **[components/about/SkillsGrid.tsx](components/about/SkillsGrid.tsx#L73)**
   - Skills grid: `gap-5 md:gap-6` → `gap-6 md:gap-8`

9. **[app/about/page.tsx](app/about/page.tsx#L68)**
   - Timeline preview: `gap-5 md:gap-6` → `gap-6 md:gap-8`

10. **[app/globals.css](app/globals.css#L2988-L3059)**
    - Added comprehensive spacing utility classes

---

## 📋 **Quick Reference Checklist**

Use this when creating new components:

- [ ] Container max-width: `max-w-7xl`
- [ ] Container padding: `px-4 sm:px-6 lg:px-8`
- [ ] Card grids: `gap-6 md:gap-8`
- [ ] Card padding (medium): `p-6 sm:p-8`
- [ ] Card padding (large): `p-6 sm:p-10 lg:p-12`
- [ ] Button spacing: Use size variants (sm/md/lg)
- [ ] Form inputs: `px-4 py-3`
- [ ] Section spacing: Use `.section-spacing` class
- [ ] Badge/tag gaps: `gap-2 sm:gap-3`
- [ ] Touch targets: `min-h-tap min-w-tap` (44px minimum)
- [ ] Border radius: `rounded-2xl` or `rounded-3xl`

---

## 🚫 **Common Mistakes to Avoid**

1. **❌ Don't use `px-5`, `px-7`, `py-2.5`, `py-3.5`**
   ✅ Stick to the standard Tailwind scale (2, 4, 6, 8, 12, etc.)

2. **❌ Don't mix gap values in similar components**
   ✅ Use consistent `gap-6 md:gap-8` for all card grids

3. **❌ Don't use arbitrary values like `p-[1.2rem]`**
   ✅ Use Tailwind classes or custom utilities

4. **❌ Don't forget responsive spacing**
   ✅ Always include breakpoint variants (sm:, md:, lg:)

5. **❌ Don't use different padding for similar cards**
   ✅ Standardize: small (p-4), medium (p-6 sm:p-8), large (p-6 sm:p-10 lg:p-12)

---

## 🔄 **Future Maintenance**

When adding new components:

1. **Check this guide first** before setting spacing values
2. **Use the custom utilities** (`.card-padding-md`, `.grid-gap-cards`, etc.)
3. **Test on all breakpoints** (mobile, tablet, desktop)
4. **Verify tap targets** are at least 44px for interactive elements
5. **Keep the scale consistent** - don't introduce new values

---

## 📚 **Resources**

- [Tailwind Spacing Scale](https://tailwindcss.com/docs/customizing-spacing)
- [Tailwind Gap Utilities](https://tailwindcss.com/docs/gap)
- [Web Accessibility (WCAG) Touch Targets](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

---

**Questions or need to add new spacing patterns?**
Update this document and ensure changes are reflected in `globals.css` and across all components.
