build_docker:
	docker build -t shipyardrun/docs:latest .

push_docker:
	docker push shipyardrun/docs:latest

build_and_push_docker: build_docker push_docker