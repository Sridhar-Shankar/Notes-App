# Pocket Notes App

## Overview

Pocket Notes is a web application that allows users to manage their notes within different groups. The app features a sidebar for group selection, a mainbar for note viewing and editing, and a modal for creating new groups. The application supports both desktop and mobile views.

## Features

- **Sidebar**: Displays a list of groups. Users can select a group to view its notes in the mainbar.
- **Mainbar**: Shows the notes of the selected group. Users can add new notes using a text area at the bottom.
- **Modal**: Allows users to create new groups by entering a group name and selecting a color.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Sridhar-Shankar/Notes-App
    cd client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

## File Structure

- `src/`
  - `components/`
    - `Sidebar.jsx` - The sidebar component for group selection.
    - `Mainbar.jsx` - The main content area where notes are displayed and added.
    - `Modal.jsx` - The modal component for creating new groups.
  - `context/`
    - `AppContext.jsx` - Provides context for managing groups and notes.
  - `App.jsx` - Main application component, integrates components.
  - `index.jsx` - Entry point for React application.
  - `styles/`
    - `Sidebar.module.css` - CSS styles for the sidebar component.
    - `Mainbar.module.css` - CSS styles for the mainbar component.
    - `Modal.module.css` - CSS styles for the modal component.

## Usage

### Sidebar

- **Desktop**: The sidebar is displayed on the left side of the screen, showing a list of groups. Clicking on a group will show its notes in the mainbar.
- **Mobile**: The sidebar is displayed as a full-width, fixed-position view. It includes a back button to return to the sidebar from the mainbar.

### Mainbar

- **Notes Display**: Displays notes of the selected group. The notes are scrollable if there are more notes than can fit in the view.
- **Adding Notes**: Type a note in the text area at the bottom of the mainbar and click the send button to add it to the selected group.

### Modal

- **Creating Groups**: Click the create group icon to open the modal. Enter a group name, select a color, and click the submit button to create a new group.

## CSS Styles

- **Sidebar Styles**: 
  - Desktop: Fixed width and height with sticky positioning for the heading.
  - Mobile: Full-width and height with fixed positioning and responsive styles.

- **Mainbar Styles**:
  - Desktop: Flexbox layout with a fixed bottom input area.
  - Mobile: Responsive adjustments for layout and font sizes.

- **Modal Styles**:
  - Desktop: Centered with a fixed width and height.
  - Mobile: Responsive width and height adjustments for better fit.

