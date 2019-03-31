# food-list 
A project for Hack Med Hackathon 2019.
It is a simple React app that displays a list of various foods and their macro split and allows users to add new food from Tesco to the list.
## The Tech
- React
- HTML/CSS
- Gets Tesco data, and allows users to submit to a SQLite database
- Node Microservices with Zeit Micro
- Kubernetes on Google Cloud Platform - traefik ingress controller routing to the web app at /, then microservices at /api/add, /api/list, /api/macro
## Creators
Most of the back-end magic by [Matt](https://twitter.com/_mattburman) with most of the UI by [Pauline](https://twitter.com/paulienuh)
