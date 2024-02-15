
## Approach 

I used Nextjs though it is just a simple component i could have used Vitejs Or CRA  To bootstrap the app

State Management: I Used useState hook to manage the count state.

Event Handlers: Defined handleIncrement and handleDecrement functions for count manipulation.
 - for the handleDecrement i assumed that it should not go below 0 based on the initial value

Component Structure: Structured within a div, containing count display and buttons for incrementing and decrementing.

Styling: Utilizes Tailwind CSS for styling with specific utility classes also i added BEM notation class if i needed manual customization.

Accessibility: Buttons are semantically correct and have descriptive titles And the "-" button gets disabled when the count is 0 

Deployment: I Deployed the app on vercel you can view it at [https://counter-app-nextjs.vercel.app/](URL)


Source Code: [https://github.com/mohammed-b-hassan/counter-app-nextjs](Github)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Paths
```
src/components/Counter.tsx
src/app/page.tsx
```
