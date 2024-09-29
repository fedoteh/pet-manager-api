.PHONY: up up-prod down

up:
	docker compose up --build

up-prod:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

down:
	docker compose down