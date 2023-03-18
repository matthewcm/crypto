.PHONY: kill build down up

export DOCKER_PROJECT = ${PROJECT_NAME}

kill:
	docker compose kill

build:
	docker compose build --no-cache

up:
	docker compose up -d 

down:
	docker compose down