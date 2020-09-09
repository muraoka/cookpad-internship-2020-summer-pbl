FROM ruby:2.7.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs default-mysql-client

WORKDIR /app
COPY ./Gemfile ./Gemfile.lock ./
RUN bundle install

EXPOSE 8080
CMD rm -f tmp/pids/server.pid && bundle exec rails server -b 0.0.0.0 -p 8080
