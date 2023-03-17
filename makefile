.PHONY: kill build down up

include .env
export 
DOCKER_PROJECT = ${PROJECT_NAME}

kill:
	docker compose kill

build:
	docker compose up -d --build

up:
	docker compose up -d 

down:
	docker compose down