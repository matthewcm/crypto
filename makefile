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
	docker compose -f docker-compose.yml run api npm run lint-all ; docker-compose rm -fsv

test:
	docker compose -f docker-compose.yml run api npm run test -- --coverage ; docker-compose rm -fsv

build-all:
	docker compose -f docker-compose.yml run api npm run build-all; docker-compose rm -fsv