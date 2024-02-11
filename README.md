# Valentine's Day Card

## Setup

1. Copy `.env.local.example` to `.env.local` and alter the following variables:
    - `NEXT_PUBLIC_TITLE`: site title
    - `NEXT_PUBLIC_EASYMODE`: set to `true` to pre-solve all puzzles
    - `GIFT_PATH`: path to a gift file
    - `GIFT_FILENAME`: file name when downloaded
    - `GIFT_CONTENT_TYPE`: file mime type
2. Upload your photos to `public/photos/`. E.g. photos of your couple of important moments.
3. Go to `app/puzzles/puzzles.ts` and add puzzles for these photos. Set `piecesCount` to manage difficulty. This is the count per one side, so the total count is `piecesCount^2`
4. Inspect the files listed below. Feel free to alter text and resources
    - `app/congratulations/page.tsx`
    - `app/page.tsx`
    - `app/puzzles/[puzzle]/page.tsx`
    - `app/globals.css`
    - `public/*`

## Development server

```bash
# Activate node 18
# Skip this step if you use node without the nvm version manager
nvm use

# Start the server
npm run dev
```

## Screenshots

| | | | |
|-|-|-|-|
|![Hello](https://github.com/ByPort/valentines-day-card/assets/7266338/cf3cdc6b-61c0-4146-b900-3c22604571c5)|![Jigsaw unsolved](https://github.com/ByPort/valentines-day-card/assets/7266338/7cdf399d-8ecd-4b35-9c6b-16483aa483b9)|![Jigsaw solved](https://github.com/ByPort/valentines-day-card/assets/7266338/99900feb-075c-4f10-84cb-9ae35ee1854b)|![Congratulations](https://github.com/ByPort/valentines-day-card/assets/7266338/3c81c1d6-2efa-4bbd-b86c-835700847d4f)|
