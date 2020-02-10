.PHONY: build

REPOSITORY=shipyardrun/docs
VERSION=v0.0.1

build:
	docker build -t ${REPOSITORY}:${VERSION} .

push:
	docker push ${REPOSITORY}:${VERSION}