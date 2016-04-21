require 'sinatra'

num = 0

get '/' do
  sleep 1
  num += 1
  "Hello number #{num}"
end

set :port, 5000
set :lock, :true # Make Sinatra single-threaded
