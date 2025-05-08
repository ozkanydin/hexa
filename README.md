# HEXA - AI Logo Design


![HEXA Demo](screen_record/rec.mov)

## Key Features

- Advanced logo generation system
- Multiple design styles (Monogram, Abstract, Mascot, Minimalist, Vintage)
- Real-time status tracking
- Cross-platform compatibility
- Cloud-based data management
- Intuitive user interface

## Screenshots

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">
  <div>
    <img src="screenshots/1.png" alt="Main Interface" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>
    <p style="text-align: center; margin-top: 8px; color: #666;">Main Interface</p>
  </div>
  <div>
    <img src="screenshots/2.png" alt="Style Selection" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>
    <p style="text-align: center; margin-top: 8px; color: #666;">Style Selection</p>
  </div>
  <div>
    <img src="screenshots/3.png" alt="Prompt Input" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>
    <p style="text-align: center; margin-top: 8px; color: #666;">Prompt Input</p>
  </div>
  <div>
    <img src="screenshots/4.png" alt="Generation Process" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>
    <p style="text-align: center; margin-top: 8px; color: #666;">Generation Process</p>
  </div>
  <div>
    <img src="screenshots/5.png" alt="Result Screen" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>
    <p style="text-align: center; margin-top: 8px; color: #666;">Result Screen</p>
  </div>
</div>

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