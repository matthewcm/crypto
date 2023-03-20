.PHONY: kill build down up

kill:
	docker compose kill

build:
	docker compose build --no-cache

up:
	docker compose up -d 

down:
	docker compose down

lint:
	docker compose -f docker-compose.yml run api npm run lint-all

test:
	docker compose -f docker-compose.yml run api npm run test -- --coverage

build-all:
	docker compose -f docker-compose.yml run api npm run build-all