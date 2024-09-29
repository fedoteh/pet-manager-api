.PHONY: up dev-config up-prod prod-config down

# Compose with volumes for the backend server
up:
	docker compose -f docker-compose.yml up -d

dev-config:
	docker compose -f docker-compose.yml config

# Compose with requirements only for prod
# use to avoid having src files in the container
up-prod:
	docker compose -f docker-compose.prod.yml up -d

prod-config:
	docker compose -f docker-compose.prod.yml config



down:
	docker compose down