#!/usr/bin/env python3

import random
import string



email= 'imonir.com@gmail.com'


# CONTAINERS
containerRedis = 'tictactoe-redis';
containerMongo = 'tictactoe-mongo';
containerBack = 'tictactoe-back';
containerFront = 'tictactoe-front';

# ENV VARIABLES
nodeEnv = 'development'

# host names
virtualHostBack = 'localhost'
virtualHostFront = 'localhost'


# DATABASE
databaseName = 'tictactoe'
databaseUser = 'databaseUser'
databasePassword = 'asdf23sagf322343likosdahv'
databaseRootPassword = 'asdf32asdf23aso2134hosdfo3'
databasePort = '29017'
mongoExtraFlags = '--wiredTigerCacheSizeGB=2'

# FRONT
portFront = '3000'
apiUrlInBrowser = f"http://{virtualHostBack}"
apiUrlInContainer = f"http://{containerBack}"

# BACK
jwtSecret = ''.join(random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for _ in range(26))
sessionSecret = ''.join(random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for _ in range(26))
portBack = '8000'
corsOrigin = f"http://{virtualHostFront}:{portFront}"




# ENV
#  redisEnv = f"CONTAINER_REDIS={containerRedis}\n"

mongoEnv = f"CONTAINER_MONGO={containerMongo}\n"\
  f"MONGODB_EXTRA_FLAGS={mongoExtraFlags}\n"\
  f"MONGODB_ROOT_PASSWORD={databaseRootPassword}\n"\
  "\n"\
  f"MONGODB_DATABASE={databaseName}\n"\
  f"MONGODB_USERNAME={databaseUser}\n"\
  f"MONGODB_PASSWORD={databasePassword}\n"\
  f"MONGODB_PORT_NUMBER={databasePort}\n"


backEnv = f"NODE_ENV={nodeEnv}\n"\
  f"PORT={portBack}\n"\
  f"JWT_SECRET={jwtSecret}\n"\
  f"SESSION_SECRET={sessionSecret}\n"\
  f"CORS_ORIGIN={corsOrigin}\n"\
  "\n"\
  f"CONTAINER_BACK={containerBack}\n"\
  f"CONTAINER_MONGO={containerMongo}\n"\
  f"VIRTUAL_HOST={virtualHostBack}\n"\
  "\n"\
  f"MONGODB_DATABASE={databaseName}\n"\
  f"MONGODB_USERNAME={databaseUser}\n"\
  f"MONGODB_PASSWORD={databasePassword}\n"\
  f"MONGODB_PORT_NUMBER={databasePort}\n"

# MONGO
with open('./.env.mongo', 'w+') as f:
    print('Creating .env.mongo')
    f.write(mongoEnv)

# BACK
with open('.env', 'w+') as f:
    print('Creating .env')
    f.write(backEnv)

