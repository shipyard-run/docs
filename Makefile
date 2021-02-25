.PHONY: build

REPOSITORY=shipyardrun/docs
VERSION=v0.3.0

build:
	docker build -t ${REPOSITORY}:${VERSION} .

push:
	docker push ${REPOSITORY}:${VERSION}
