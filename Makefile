.PHONY: build

REPO=shipyardrun/docs
VERSION=v0.6.2

build:
	docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
	docker buildx create --name docs || true
	docker buildx use docs
	docker buildx inspect --bootstrap
	docker buildx build --platform linux/arm64,linux/amd64 \
		-t ${REPO}:${VERSION} \
    -f ./Dockerfile \
		--no-cache \
    . \
		--push

build_docker_dev:
	docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
	docker buildx create --name docs || true
	docker buildx use docs
	docker buildx inspect --bootstrap
	docker buildx build --platform linux/amd64 \
		-t ${REPO}:${VERSION} \
    -f ./Dockerfile \
    . \
		--load

push:
	echo "Pushed image ${REPO}:${VERSION}"
