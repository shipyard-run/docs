.PHONY: build

REPOSITORY=shipyardrun/docs
VERSION=v0.0.4

build:
	docker build -t ${REPOSITORY}:${VERSION} .

push:
	docker push ${REPOSITORY}:${VERSION}