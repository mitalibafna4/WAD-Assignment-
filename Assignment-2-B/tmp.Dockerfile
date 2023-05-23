FROM python:3.9-slim

WORKDIR /app

LABEL Name="Hello World"
LABEL Version="1.0"

COPY . .

EXPOSE 80

CMD [ "python", "./hello.py" ]
