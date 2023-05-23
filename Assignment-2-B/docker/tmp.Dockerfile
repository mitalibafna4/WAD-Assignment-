# Use an appropriate base image for your Python application
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app
LABEL Name=my-docker-app
LABEL Version=1.0.0
EXPOSE 8080

# Copy the app.py file into the container
COPY app.py .

# Install any necessary dependencies
# Example: If you have a requirements.txt file, uncomment the line below
# COPY requirements.txt .
# RUN pip install -r requirements.txt

# Set the command to run your application when the container starts
CMD ["python", "app.py"]
