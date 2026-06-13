all: start

start:
	docker compose run --rm -it --service-ports node bash -c "pnpm dev --host"

shell:
	docker compose run --rm -it node bash
