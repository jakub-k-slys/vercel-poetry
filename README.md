# Poetry and Vercel
Vercel is a cloud platform designed to simplify website and web application deployment and scaling, adopting a serverless approach to relieve developers from server management complexities. 
Renowned for supporting frontend frameworks like **React**, **Vue.js**, and **Next.js**, Vercel also facilitates the deployment of serverless functions written in **Python**, enabling the creation of full-stack applications. 
To deploy a **Python** project on Vercel, developers need to ensure their codebase includes all necessary **Python** files, a `requirements.txt` listing dependencies, along with configuration files and optional components like static assets and serverless functions. 
However, if a **Python** project utilizes `pyproject.toml` and **Poetry** instead of `requirements.txt`, a few adjustments may be needed to accommodate **Poetry**'s features for dependency declaration, version management, and other tasks.

```json
{
  "builds": [
    {"src": "/app/main.py", "use": "@jakub-k-slys/vercel-poetry@0.0.5"}
  ],
  "routes": [
    {"src": "/(.*)", "dest": "app/main.py"}
  ]
}
```