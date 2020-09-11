bundle exec rails db:create
ridgepole -c ./config/database.yml --apply -f ./db/Schemafile
bundle exec rails db:seed

rm -f tmp/pids/server.pid
bundle exec rails server -b 0.0.0.0 -p 8080
