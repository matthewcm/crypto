.PHONY: kill build down up

export DOCKER_PROJECT = ${PROJECT_NAME}

kill:
	docker compose kill

build:
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose up -d --build

up:
	docker compose up -d 

down:
	docker compose down