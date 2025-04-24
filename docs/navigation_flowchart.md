```mermaid
flowchart TD
    A[Landing Page] --> B[Login/Register]
    B --> C[Home Dashboard]
    
    C --> D[Create New Entry]
    C --> E[View Journal Entries]
    C --> F[Profile Settings]
    
    D --> G[Add Location]
    D --> H[Upload Photos]
    D --> I[Write Description]
    D --> J[Add Date/Time]
    G & H & I & J --> K[Save Entry]
    K --> C
    
    E --> L[Single Entry View]
    L --> M[Edit Entry]
    L --> N[Delete Entry]
    M --> K
    N --> C
    
    F --> O[Edit Profile]
    F --> P[Change Password]
    F --> Q[Notification Settings]
    O & P & Q --> C

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style D,E,F fill:#dfd,stroke:#333,stroke-width:2px
```

# Travel Journal App Navigation Flowchart

This flowchart (Fig. 2.1) illustrates the navigation structure of the Travel Journal App. It shows the main user flows from the landing page through various features including journal entry management, profile settings, and content creation.

## Legend
- Pink: Entry point
- Blue: Main dashboard
- Green: Primary features
- White: Secondary actions and forms 