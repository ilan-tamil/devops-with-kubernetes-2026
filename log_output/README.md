# Log output

A small Node.js service that generates one random identifier when it starts and writes it to stdout every five seconds with an ISO timestamp.

The HTTP server responds on the port from the `PORT` environment variable, defaulting to `3000`.

## Run locally

```bash
node index.js
```

## Build and run with Docker

Run these commands from this directory:

```bash
docker build -t log-output:1.1 .
docker run --rm -e PORT=3000 -p 3000:3000 log-output:1.1
```

## Deploy to a local k3d cluster

```bash
docker build -t log-output:1.1 .
k3d image import log-output:1.1
kubectl apply -f manifests/deployment.yaml
kubectl get pods
kubectl logs -f deployment/log-output
```

The deployment uses `imagePullPolicy: Never`, so the image must be imported into the k3d cluster first.
