# Nexus7 - Property Management System

A modern, AI-powered property management system for handling tenant communications, maintenance requests, and asset management.

## Core Features

- **Omnichannel Communication**
  - SMS, WhatsApp, Email, and Voice Message Support
  - Real-time AI-powered Triage
  - Multi-language Support (FR/EN/DE)

- **Intelligent Routing**
  - AI-based Classification
  - Priority-based Escalation
  - Pattern Detection for Preventive Maintenance

- **Asset Management Dashboard**
  - Real-time Analytics
  - SLA Monitoring
  - Cost Tracking
  - Geographic Visualization

- **Integration**
  - Garaio REM ERP Integration
  - Tenant Portal
  - API Gateway

## Technical Stack

- **Backend**: Python/Go Microservices
- **Frontend**: React/Next.js
- **Database**: PostgreSQL
- **Message Queue**: RabbitMQ/Kafka
- **Storage**: S3
- **Analytics**: Snowflake/BigQuery
- **Infrastructure**: Kubernetes
- **Security**: OAuth 2.1/OIDC

## Getting Started

### Prerequisites

- Docker
- Kubernetes
- Python 3.9+
- Node.js 18+
- PostgreSQL 14+

### Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   # Backend
   cd backend
   python -m venv venv
   source venv/bin/activate  # or `venv\Scripts\activate` on Windows
   pip install -r requirements.txt

   # Frontend
   cd frontend
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start development servers:
   ```bash
   # Backend
   cd backend
   uvicorn app.main:app --reload

   # Frontend
   cd frontend
   npm run dev
   ```

## Architecture

```
[Channels] → API Gateway → Event Bus → (AI Triage) ┐
                                                  │
                    ┌──> Admin Service ──> ERP REM (AMQP/GraphQL)
                    │
                    ├──> Concierge Service
                    │
                    └──> Maintenance Service
                                   │
        Data Lake / Warehouse  <───┘→  Analytics & Patterns → AM Dashboard
```

## Security & Compliance

- OAuth 2.1/OIDC Authentication
- TLS 1.3 Encryption
- AES-256 at-rest Encryption
- GDPR/FADP Compliance
- Centralized Logging
- 99.9% Uptime SLA

## License

Proprietary - All rights reserved 