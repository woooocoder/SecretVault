# SecretVault
- Provide secure storage and management of environment variables

## Design Docs
[Figma Whiteboard](https://www.figma.com/board/YMHmNF4FxfBPVN3mrLMWDP/SecretVault-Design-Docs?node-id=0-1&t=E7PBuSf2OhZ4Sg41-1)

[Figma Prototype/Layout](https://www.figma.com/design/2hR3T26Tyb3irolKBJ5JzM/SecretVault-Prototype?node-id=0-88&t=p80n9thzhVugVOHJ-1)

## Technologies
### Front End
     - Vite
     - TailwindCSS
     - DaisyUI
     - React
     - React Router

### Backend
     - Express
     - MongoDB
     - Cloudinary
     - AWS

## Access management
     Role-based access control: Admin, Readonly, contributer
     Team Collab: Admin invites people with defined permissions
     Audit Logs: Track who/when someone accesses/modifies vars 

## Versioning
     Variable History
     Rollback History

## Integration
     API Access: Fetch env-vars
     Cloud provider support: Integrate with AWS -> direct injection

## Scoping
     Group vars by environment - dev, staging, prod
     Provide easy toggling and mgmt between envs

## Sharing
     Expiration dates
     Auth/Encryption? 
           2FA + SSO
           E2E
           Auto-rotate keys

## Backups & Recovery?
    state storage w/wo Versioning

## Templating
     Clone/provide templates for common config formats - AWS, DB, API key, Authorization-Bearer token
