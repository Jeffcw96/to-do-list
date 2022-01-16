dev-docker-no-cache:
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d

production-build: 
	npm run build
	npm run start
