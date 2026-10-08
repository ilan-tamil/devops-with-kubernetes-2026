# DevOps with Kubernetes 2026

Course project submissions and Kubernetes manifests.

## Exercises

- `0.1`: course introduction completed in the MOOC.fi portal
- `1.1`: [Log output](./tree/main/log_output)
- `1.2`: [Todo app, step 1](./tree/main/todo_app)
- `1.3`: declarative Log output deployment in `log_output/manifests`
- `1.4`: declarative Todo app deployment in `todo_app/manifests`

Before submitting an exercise, verify the relevant application locally and publish a GitHub release with the matching exercise tag, such as `1.1` or `1.2`. The course answer should link to that release.

## Repository layout

```text
log_output/
  index.js
  package.json
  Dockerfile
  manifests/deployment.yaml
  README.md

todo_app/
  index.js
  package.json
  Dockerfile
  manifests/deployment.yaml
  README.md
```

Both applications default to port `3000` and support the `PORT` environment variable.
