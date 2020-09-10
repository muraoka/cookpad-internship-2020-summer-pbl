FROM ruby:2.7.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs default-mysql-client

WORKDIR /app
COPY ./Gemfile ./Gemfile.lock ./
RUN bundle install

COPY ./docker-entrypoint.sh /
ENTRYPOINT /docker-entrypoint.sh
