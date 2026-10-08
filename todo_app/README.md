# Todo app

This is the initial web server for the course project. It prints the port it uses when it starts and responds with a short status message.

The port is configured with the `PORT` environment variable and defaults to `3000`.

## Run locally

```bash
node index.js
```

## Build and run with Docker

```bash
docker build -t todo-app:1.2 .
docker run --rm -e PORT=3000 -p 3000:3000 todo-app:1.2
```

## Deploy to a local k3d cluster

```bash
docker build -t todo-app:1.2 .
k3d image import todo-app:1.2
kubectl apply -f manifests/deployment.yaml
kubectl get pods
```

The deployment uses `imagePullPolicy: Never`, so the image must be imported into the k3d cluster first.
