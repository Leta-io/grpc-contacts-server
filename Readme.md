## grpc-contacts-server

This backend server acts as the entry point for frontend requests for purposes of the coding challenge.

To run locally:

Install docker & docker-compose:

1. For mac: Follow the instructions at: https://docs.docker.com/desktop/install/mac-install/
2. For windows, follow the instructions at: https://docs.docker.com/desktop/install/windows-install/
3. For linux, follow the instructions at: https://docs.docker.com/desktop/install/linux-install/

*_Ensure that you have no other applications running on the ports: 8080 and 5000_*
After you have your docker service running:

1. Clone this repository `git clone https://github.com/Leta-io/grpc-contacts-server`
2. Navigate into the directory containing this repo `cd grpc-contacts-server`
3. Run `docker-compose up --build`
   The server should now be accessible at: http://localhost:8080/

The default predefined user accounts for login are:

```
[
    {
     "username":"admin",
     "password":"admin"
    },
    
    {
     "username":"staff",
     "password":"staff"
    }
]
```