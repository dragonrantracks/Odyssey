# Database Schema Diagrams

## Fig. 3.1: User Data Schema in MySQL

```mermaid
erDiagram
    USER {
        string id PK "UUID"
        string username "VARCHAR(50)"
        string email "VARCHAR(100)"
        string password "VARCHAR(255)"
        string firstName "VARCHAR(50)"
        string lastName "VARCHAR(50)"
        string avatarUrl "VARCHAR(255)"
        boolean isActive "BOOLEAN"
        datetime createdAt "TIMESTAMP"
        datetime updatedAt "TIMESTAMP"
    }
```

## Fig. 3.2: Journal Data Schema in MySQL

```mermaid
erDiagram
    JOURNAL {
        string id PK "UUID"
        string title "VARCHAR(100)"
        text content "TEXT"
        string locationName "VARCHAR(100)"
        decimal latitude "DECIMAL(10,8)"
        decimal longitude "DECIMAL(11,8)"
        string locationLink "VARCHAR(255)"
        datetime visitDate "TIMESTAMP"
        boolean isPublic "BOOLEAN"
        string userId FK "UUID"
        datetime createdAt "TIMESTAMP"
        datetime updatedAt "TIMESTAMP"
    }

    JOURNAL_IMAGE {
        string id PK "UUID"
        string journalId FK "UUID"
        string imageUrl "VARCHAR(255)"
        int orderIndex "INT"
        datetime createdAt "TIMESTAMP"
    }

    JOURNAL_REACTION {
        string id PK "UUID"
        string journalId FK "UUID"
        string userId FK "UUID"
        string reactionType "VARCHAR(20)"
        datetime createdAt "TIMESTAMP"
    }

    JOURNAL_COMMENT {
        string id PK "UUID"
        string journalId FK "UUID"
        string userId FK "UUID"
        text content "TEXT"
        datetime createdAt "TIMESTAMP"
        datetime updatedAt "TIMESTAMP"
    }

    JOURNAL ||--o{ JOURNAL_IMAGE : "has"
    JOURNAL ||--o{ JOURNAL_REACTION : "has"
    JOURNAL ||--o{ JOURNAL_COMMENT : "has"
```

## Database Schema Explanation

### User Table (Fig. 3.1)
The User table stores information about registered users of the Odyssey Travel Journal application:
- **id**: Unique identifier for each user (UUID)
- **username**: User's chosen username (unique)
- **email**: User's email address (unique)
- **password**: Hashed password for authentication
- **firstName** and **lastName**: User's full name
- **avatarUrl**: URL to user's profile picture
- **isActive**: Account status flag
- **createdAt** and **updatedAt**: Timestamps for record creation and updates

### Journal Table (Fig. 3.2)
The Journal table and its related tables store travel journal entries and associated data:
- **Journal**: Main table for journal entries
  - **id**: Unique identifier for each journal entry
  - **title**: Journal entry title
  - **content**: Main text content of the journal
  - **locationName**: Name of the visited location
  - **latitude** and **longitude**: Geographical coordinates
  - **locationLink**: Link to map location
  - **visitDate**: Date of the visit
  - **isPublic**: Visibility setting
  - **userId**: Foreign key to User table
  - **createdAt** and **updatedAt**: Timestamps

- **Journal_Image**: Stores images associated with journal entries
  - Links to Journal via journalId
  - Includes order index for image sequencing

- **Journal_Reaction**: Stores user reactions to journal entries
  - Links to both Journal and User tables
  - Supports different reaction types

- **Journal_Comment**: Stores comments on journal entries
  - Links to both Journal and User tables
  - Includes content and timestamps 