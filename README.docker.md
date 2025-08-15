# IEN Research Intelligence Platform - Docker Deployment

This document covers Docker deployment for both local development and production VPS deployment with Traefik.

## Quick Start

### Local Development
```bash
# Option 1: Standard Next.js development (recommended for active development)
npm run dev

# Option 2: Docker development environment
./deploy.sh dev
```

### Production Deployment (VPS with Traefik)
```bash
# Deploy to production
./deploy.sh prod --domain ien-research.yourdomain.com
```

## Prerequisites

### For Local Development
- Docker and Docker Compose
- Node.js 20+ (for non-Docker development)

### For VPS Production
- Docker and Docker Compose installed on VPS
- Traefik reverse proxy running
- Domain name pointing to your VPS

## File Structure

```
ien-platform/
├── Dockerfile                 # Multi-stage production build
├── docker-compose.yml         # Production with Traefik
├── docker-compose.dev.yml     # Local development
├── .dockerignore              # Docker build exclusions
├── .env.example               # Environment template
├── deploy.sh                  # Deployment script
└── README.docker.md           # This file
```

## Deployment Options

### 1. Local Development (Non-Docker) - **Recommended for Development**
```bash
npm install
npm run dev
```
- Fastest hot reloading
- Direct file system access
- Best debugging experience

### 2. Local Development (Docker)
```bash
./deploy.sh dev
```
- Containerized environment
- Matches production setup
- Useful for testing Docker configuration

### 3. Production Deployment
```bash
./deploy.sh prod --domain your-domain.com
```
- Optimized production build
- Traefik integration
- SSL/TLS termination
- Security hardening

## Configuration

### Environment Variables
1. Copy `.env.example` to `.env.local` (development) or `.env` (production)
2. Update variables as needed:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

### Domain Configuration (Production)
Update the domain in `docker-compose.yml`:
```yaml
- "traefik.http.routers.ien-research.rule=Host(`your-domain.com`)"
- "traefik.http.routers.ien-research-http.rule=Host(`your-domain.com`)"
```

Or use the deployment script:
```bash
./deploy.sh prod --domain your-domain.com
```

## Traefik Integration

This application is configured to work with Traefik reverse proxy. Traefik provides:

- Automatic SSL/TLS certificates via Let's Encrypt
- Load balancing
- HTTP to HTTPS redirects
- Security headers
- Rate limiting

### Traefik Network
The application expects a `traefik` Docker network. If it doesn't exist:
```bash
docker network create traefik
```

### Required Traefik Configuration
Your Traefik should have these entrypoints:
- `web` (port 80) - HTTP
- `websecure` (port 443) - HTTPS

## Security Features

### Docker Security
- Multi-stage builds for minimal attack surface
- Non-root user (nextjs:nodejs)
- Read-only filesystem
- No new privileges
- Resource limits
- Health checks

### Traefik Security Middleware
- Frame denial (X-Frame-Options)
- Content type sniffing protection
- XSS filtering
- HSTS headers
- Rate limiting

## Commands Reference

### Deployment Script Usage
```bash
./deploy.sh [command] [options]

Commands:
  dev         Start development environment
  prod        Deploy to production
  build       Build Docker image only
  stop        Stop running containers
  logs        Show container logs
  clean       Clean up containers and images
  help        Show help message

Options:
  --domain    Set domain name for production
  --rebuild   Force rebuild of Docker image
  --verbose   Enable verbose output
```

### Docker Compose Commands
```bash
# Production
docker-compose up -d                    # Start production
docker-compose down                     # Stop production
docker-compose logs -f                  # View logs

# Development
docker-compose -f docker-compose.dev.yml up -d    # Start development
docker-compose -f docker-compose.dev.yml down     # Stop development
docker-compose -f docker-compose.dev.yml logs -f  # View logs
```

### Direct Docker Commands
```bash
# Build image
docker build -t ien-research-platform .

# Run container
docker run -d -p 3000:3000 ien-research-platform

# View logs
docker logs ien-research-platform
```

## Monitoring and Maintenance

### Health Checks
- Application health: `http://your-domain.com/health`
- Container health: Built-in Docker health checks

### Logs
```bash
# View application logs
./deploy.sh logs

# Or directly with Docker Compose
docker-compose logs -f ien-platform
```

### Updates
```bash
# Rebuild and redeploy
./deploy.sh prod --rebuild --domain your-domain.com
```

### Cleanup
```bash
# Clean up old containers and images
./deploy.sh clean
```

## Troubleshooting

### Common Issues

1. **Traefik network not found**
   ```bash
   docker network create traefik
   ```

2. **Port already in use (development)**
   ```bash
   ./deploy.sh stop
   # Or kill process using port 3000
   lsof -ti:3000 | xargs kill
   ```

3. **SSL certificate issues**
   - Check Traefik logs
   - Verify domain DNS points to your VPS
   - Ensure port 80/443 are open

4. **Container won't start**
   ```bash
   # Check logs
   docker-compose logs ien-platform
   
   # Check container status
   docker-compose ps
   ```

### Debug Mode
```bash
# Enable verbose logging
./deploy.sh prod --verbose --domain your-domain.com
```

## Performance Optimization

### Production Build Features
- Multi-stage Docker build
- Minimal Alpine Linux base
- Static asset optimization
- gzip compression (via Traefik)
- HTTP/2 support (via Traefik)

### Resource Limits
- Memory limit: 512MB
- CPU limit: 0.5 cores
- Adjustable in `docker-compose.yml`

## Development Workflow

1. **Local Development**: Use `npm run dev` for active development
2. **Testing Docker**: Use `./deploy.sh dev` to test containerization
3. **Production Testing**: Deploy to staging environment first
4. **Production Deploy**: Use `./deploy.sh prod` with your domain

## Support

For issues with:
- **Application**: Check application logs and Next.js documentation
- **Docker**: Check Docker logs and container status
- **Traefik**: Check Traefik dashboard and logs
- **SSL**: Verify domain DNS and Let's Encrypt rate limits