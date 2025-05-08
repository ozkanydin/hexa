# HEXA - AI Logo Design

📺 [Watch Hexa App Video](https://www.youtube.com/watch?v=6FHfPMcAiBI)


## Key Features

- Advanced logo generation system
- Multiple design styles (Monogram, Abstract, Mascot, Minimalist, Vintage)
- Real-time status tracking
- Cross-platform compatibility
- Cloud-based data management
- Intuitive user interface

## Screenshots

| Main Screen | Style Selection |
|-------------|-----------------|
| ![Main Screen](screenshots/1.png) | ![Style Selection](screenshots/2.png) |
| Prompt Input | Processing |
| ![Prompt Input](screenshots/3.png) | ![Processing](screenshots/4.png) |
| Result |
| ![Result](screenshots/5.png) |

## Technical Stack

- React Native
- TypeScript
- Firebase/Firestore
- Expo
- Linear Gradient
- Vector Icons

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Application screens
├── services/       # Firebase and other services
├── styles/         # Global styles and theme
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Implementation Details

### Core Components

1. **LogoGeneratorScreen**
   - Main interface for logo creation
   - Real-time status updates
   - Style selection system
   - Input validation

2. **OutputScreen**
   - Result display
   - Design preview
   - Export functionality

3. **DesignStatusChip**
   - Status indicator
   - Progress tracking
   - Interactive feedback

### Data Flow

1. User input processing
2. Style selection validation
3. Generation request handling
4. Status management
5. Result processing
6. Data persistence

### State Management

- Local state for UI components
- Cloud state for design data
- Real-time status synchronization

Project Link: [https://github.com/ozkanydin/hexa](https://github.com/ozkanydin/hexa) 