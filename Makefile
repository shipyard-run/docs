.PHONY: build

REPOSITORY=shipyardrun/docs
VERSION=v0.0.7

build:
	docker build -t ${REPOSITORY}:${VERSION} .

push:
	docker push ${REPOSITORY}:${VERSION}