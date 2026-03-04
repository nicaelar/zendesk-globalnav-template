# Global Navigation Page Template - Garden Implementation

This project implements the Zendesk Global Navigation page template using the Garden design system.

## What's Included

### 1. Icon Library (`src/icons/GlobalNavIcons.jsx`)
A complete SVG icon library with all navigation icons from the Figma Global Navigation Icons file, including:
- Navigation icons (Home, Inbox, Contacts, Building, etc.)
- Product icons (Support, Chat, Voice)
- Action icons (Bell, Search, Plus, etc.)
- Brand icons (Zendesk logo)

All icons are exported as React components with customizable size and color props.

### 2. Page Template Component (`src/components/GlobalNavPageTemplate.jsx`)
A fully implemented page template that includes:

#### Header
- Zendesk logo
- Product tray with dropdown
- Navigation tabs (Support product tabs with avatars and status indicators)
- Action buttons (Search, Conversations, Chat, Voice, etc.)
- Notification bell
- Help center link
- User avatar

#### Left Navigation
- Vertical navigation bar with icon buttons
- Active state highlighting
- Gradient overlay
- Icons for: Home, Inbox, Contacts, Organization, Custom Objects, Analytics, Settings

#### Main Content Area
- White background with shadow
- Rounded top-left corner
- Scrollable content area

## Technologies Used

- **React 18** - UI framework
- **Garden Design System** - Component library
  - `@zendeskgarden/react-buttons` - Button components
  - `@zendeskgarden/react-avatars` - Avatar component
  - `@zendeskgarden/react-theming` - Theme provider
- **styled-components** - CSS-in-JS styling
- **Vite** - Build tool and dev server

## Design Fidelity

This implementation matches the Figma design with:
- Exact dimensions (1280x800px)
- Accurate colors from Garden tokens
- Proper spacing using Garden spacing system (xxs=4px, xs=8px, sm=12px)
- Border radius using Garden radii (lg=8px)
- Interactive states (hover, active, disabled)
- Status indicators on avatars

## How to Use

### Running the Development Server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

### Using the Icon Library

```jsx
import { HomeIcon, ProductSupportIcon } from './icons/GlobalNavIcons';

<HomeIcon size={20} color="#5C6970" />
```

### Using the Page Template

```jsx
import GlobalNavPageTemplate from './components/GlobalNavPageTemplate';

function App() {
  return <GlobalNavPageTemplate />;
}
```

### Customizing the Template

The component includes state management for:
- Active tab selection
- Active navigation item
- Interactive hover states

You can extend it by:
1. Adding your content to the `ContentArea`
2. Customizing the tabs array
3. Adding more navigation items
4. Connecting to your application state

## Color System

The implementation uses colors from the Garden design system:

- **Background**: `#f8f9f9` (nav/bg/default)
- **White**: `white` (bg/default)
- **Text Primary**: `#293239` (navbutton/fg/default)
- **Text Subtle**: `#5c6970` (navbutton/fg/subtle)
- **Border**: `#b0b8be` (navbutton/border/default)
- **Active BG**: `#293239` (navbutton/bg/*current)
- **Status Available**: `#00a656` (avatar/bg/available)
- **Status Offline**: `#87929d` (avatar/bg/offline)

## Typography

Follows the design specs:
- **Font**: SF Pro Text (system font fallback: sans-serif)
- **Small/Bold**: 12px, 600 weight, 16px line-height
- **Small/Default**: 12px, 400 weight, 16px line-height
- **Letter Spacing**: -0.0004px

## Next Steps

To integrate this into your application:

1. **Add routing**: Connect the navigation items to your router
2. **Add real data**: Replace placeholder text with actual user/product data
3. **Add functionality**: Implement tab management, notifications, search, etc.
4. **Add subnav**: Implement the secondary navigation panel if needed
5. **Responsive design**: Add media queries for different screen sizes
6. **Accessibility**: Add ARIA labels, keyboard navigation, focus management

## File Structure

```
src/
├── icons/
│   ├── GlobalNavIcons.jsx    # Icon library
│   └── README.md              # Icon documentation
├── components/
│   └── GlobalNavPageTemplate.jsx  # Main template component
├── App.jsx                    # App entry point
└── main.jsx                   # React DOM root
```

## Garden Design System Integration

This implementation follows Garden best practices:
- Uses ThemeProvider for consistent theming
- Leverages Garden components where available (Button, Avatar)
- Uses styled-components (Garden's styling approach)
- Follows Garden spacing, color, and typography systems
- Matches Garden interaction patterns

## References

- [Garden Design System](https://garden.zendesk.com/)
- [Garden React Components](https://zendeskgarden.github.io/react-components/)
- [Figma Global Navigation Components](https://www.figma.com/design/n2G3WXnDqtyWTfSb6yWTyJ/Global-Navigation-Components)
