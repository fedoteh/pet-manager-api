.PHONY: up dev-config up-prod prod-config down

up:
	docker compose -f docker-compose.yml up -d

dev-config:
	docker compose -f docker-compose.yml config


up-prod:
	docker compose -f docker-compose.prod.yml up --build -d

prod-config:
	docker compose -f docker-compose.prod.yml config


down:
	docker compose down