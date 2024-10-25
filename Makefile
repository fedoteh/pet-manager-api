.PHONY: up dev-config up-prod prod-config down

COMPOSE_FILE_DEV=docker-compose.yml
COMPOSE_FILE_PROD=docker-compose.prod.yml

# Compose with volumes for the backend server
up-dev:
	docker compose -f $(COMPOSE_FILE_DEV) up -d

up-dev-build:
	docker compose -f $(COMPOSE_FILE_DEV) up -d --build	

dev-config:
	docker compose -f $(COMPOSE_FILE_DEV) config

# Compose with requirements only for prod
# use to avoid having src files in the container
up-prod:
	DB_SSL=true docker compose -f $(COMPOSE_FILE_PROD) up -d

# Use this one to build newer changes locally 
# instead of pulling from the registry
up-prod-build: 
	DB_SSL=true docker compose -f $(COMPOSE_FILE_PROD) up -d --build

prod-config:
	docker compose -f $(COMPOSE_FILE_PROD) config

# Prerequisites: up-dev; then run the integration tests, 
# and finally tear down the stack
test: up-dev
	docker compose exec backend npm test
	$(MAKE) down

down:
	docker compose down