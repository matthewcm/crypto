.PHONY: kill build down up lint test build-all run-server run-client

include .env
export $(shell sed 's/=.*//' .env)


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

run-server:
	docker compose -f docker-compose.yml run api npm run start:server --workspace=server

run-client:
	docker compose -f docker-compose.yml run client npm run dev --workspace=client -- --port ${CLIENT_PORT}
