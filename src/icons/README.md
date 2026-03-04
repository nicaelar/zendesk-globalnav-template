# Global Navigation Icons

This library contains React components for all the global navigation icons used in the Zendesk Global Navigation system.

## Usage

Import the icons you need from `GlobalNavIcons.jsx`:

```jsx
import { HomeIcon, InboxIcon, ProductSupportIcon } from './icons/GlobalNavIcons';

// Use in your component
function MyComponent() {
  return (
    <div>
      <HomeIcon size={20} color="#5C6970" />
      <InboxIcon size={20} color="#293239" />
      <ProductSupportIcon size={20} color="white" />
    </div>
  );
}
```

## Props

All icon components accept the following props:

- `size` (number, optional): Size of the icon in pixels. Default: 20
- `color` (string, optional): Fill color of the icon. Default: '#5C6970'
- `...props`: Any other SVG props (className, style, etc.)

## Available Icons

### Navigation Icons
- `HomeIcon` - Home page
- `InboxIcon` - Inbox/Views
- `BookContactsIcon` - Contacts
- `BuildingIcon` - Organization
- `ShapesIcon` - Custom Objects
- `BarChartSquareIcon` - Analytics/Reports
- `GearIcon` - Settings

### Product Icons
- `ProductSupportIcon` - Support product
- `ProductChatIcon` - Chat product
- `ProductVoiceIcon` - Voice product

### Action Icons
- `BellIcon` - Notifications
- `MagnifyingGlassIcon` - Search
- `SproutIcon` - Placeholder/Growth
- `DotsVerticalIcon` - Overflow menu
- `RescueRingIcon` - Help center
- `BubbleIcon` - Message/Chat
- `ChevronDownIcon` - Dropdown
- `PlusIcon` - Add/Create
- `XSmallIcon` - Close/Remove

### Brand Icons
- `ZendeskLogoIcon` - Zendesk logo

## Source

These icons are based on the Figma Global Navigation Icons file and are designed to match the Zendesk Garden design system.

## Integration with Garden

These icons are designed to work seamlessly with Garden components. The default color (#5C6970) matches Garden's neutral color palette, and the icons follow Garden's sizing conventions.

### Example with Garden Components

```jsx
import { Button } from '@zendeskgarden/react-buttons';
import { HomeIcon } from './icons/GlobalNavIcons';

function NavigationButton() {
  return (
    <Button>
      <HomeIcon size={16} color="currentColor" />
      <span>Home</span>
    </Button>
  );
}
```

## Color Palette

Common colors used in the navigation:
- Default: `#5C6970` (neutral-600)
- Current/Active: `white` or `#293239` (neutral-900)
- Hover: Typically with reduced opacity or lighter shade

## Notes

- All icons have a consistent 20x20 viewBox
- Icons use the `currentColor` keyword when you want them to inherit text color
- For accessibility, always provide appropriate aria-labels when using icons as buttons
