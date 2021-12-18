.PHONY: build

REPO=shipyardrun/docs
VERSION=v0.4.1

build:
	docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
	docker buildx create --name nomad || true
	docker buildx use nomad
	docker buildx inspect --bootstrap
	docker buildx build --platform linux/arm64,linux/amd64 \
		-t ${REPO}:${VERSION} \
    -f ./Dockerfile \
		--no-cache \
    . \
		--push

push:
	echo "Pushed image ${REPO}:${VERSION}"