# Poetry and Vercel
Vercel is a cloud platform designed to simplify website and web application deployment and scaling, adopting a serverless approach to relieve developers from server management complexities. 
Renowned for supporting frontend frameworks like **React**, **Vue.js**, and **Next.js**, Vercel also facilitates the deployment of serverless functions written in **Python**, enabling the creation of full-stack applications. 
To deploy a **Python** project on Vercel, developers need to ensure their codebase includes all necessary **Python** files, a `requirements.txt` listing dependencies, along with configuration files and optional components like static assets and serverless functions. 

## Deploying with Poetry
However, if a **Python** project utilizes `pyproject.toml` and **Poetry** instead of `requirements.txt`, a few adjustments may be needed to accommodate **Poetry**'s features for dependency declaration, version management, and other tasks.

Here is sample `vercel.json` file that can be used to deploy **Poetry** projects. 
```json
{
  "builds": [
    {"src": "/app/main.py", "use": "@jakub-k-slys/vercel-poetry"}
  ],
  "routes": [
    {"src": "/(.*)", "dest": "app/main.py"}
  ]
}
```
This **JSON configuration** specifies the builds and routes for a Vercel deployment, replacing the default `@vercel/python` builder with `@jakub-k-slys/vercel-poetry` for enhanced dependency management. 
It includes a single build configuration where the source is set to `/app/main.py`, utilizing the specified package for handling dependencies. 
Additionally, it defines a route configuration where any request to the root directory `/` or its subdirectories will be directed to `app/main.py`. 
This setup ensures that the main **Python** file is appropriately handled for deployment on Vercel using the custom `@jakub-k-slys/vercel-poetry` builder.
