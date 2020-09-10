bin/rails db:create
ridgepole -c config/database.yml --apply -f db/Schemafile
bin/rails db:seed

rm -f tmp/pids/server.pid
bin/rails server -b 0.0.0.0 -p $PORT
