# Introduction
Backend service for storing tick tack toe game state

## Details
1. Player actions(text) are stored in mongo database along with sessionid provided in request header by client
2. Player actions are read from mongo database and sorted by Created At Desc and filtered by sessionid value provided by client in request header
3. Express is used for api and Mongo as Database


## Run the App in development mode
### Prerequisite
1. Docker
2. docker-compose
3. Python 3 (for helper scripts)

### Quick Start
Below commands should work on linux, mac etc. may vary on windows 

```bash

# Clone the repository
git clone https://github.com/dostokhan/tictactoe-back
# Go inside the directory
cd tictactoe-back

# Create environment files(.env, .env.mongo) using helper script
# or use provided example .env files 
chmod +x initialize.py
./initialize.py

# build api and mongo container images with docker-compose or with helper script
chmod +x run.py
./run.py build

# Start development containers
./run.py up

```

