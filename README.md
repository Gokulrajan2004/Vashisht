# Automating Commercial Aquaculture Using WiFi Technology
## Abstract

This project introduces a groundbreaking, cost-efficient, and scalable solution for real-time monitoring and management of water quality in commercial aquaculture setups. Leveraging advanced sensors and WiFi technology, the system aims to ensure optimal water conditions, promoting the health and growth of aquatic organisms, thereby increasing productivity and profitability in aquaculture operations.

## Table of Contents
Introduction

Features

Technology Stack

Installation

Usage

System Architecture

Contributing

Results

Future Work

Acknowledgements


## Introduction

In the aquaculture industry, maintaining high-quality water is essential—it's a cornerstone of success. Addressing the challenges posed by suboptimal water conditions, this project offers an automated solution capable of monitoring key water quality indicators such as ORP, pH, temperature, and TDS. Through automatic adjustments using solenoid valves and motors, and powered by Firebase for real-time data handling, our system sets a new benchmark in water quality management for aquaculture.

## Features

Real-time Water Quality Monitoring: Continuous tracking of vital parameters: ORP, pH, temperature, and TDS.
Remote Access and Control: Leverages Firebase for effortless remote monitoring and management via mobile devices.
Automated Water Adjustment: Instant water quality adjustments using automated solenoid valves and motors upon detecting deviations from ideal conditions.
Fish Feeding Automation: Incorporates a servo motor-driven feeding mechanism to optimize feed schedules.
User-friendly Interface: Provides an intuitive LCD and mobile interface for easy monitoring and management.
## Technology Stack

ESP8266 Board: Enables WiFi connectivity and system control.
Sensors: ORP, pH, Temperature, and TDS sensors for all-around water quality monitoring.
Actuators: Solenoid valves for controlling water outflow and motors
for managing water replenishment based on water level detections.
Fish Feeding Mechanism: Driven by a servo motor.
Data Backend: Utilizes Firebase for real-time data storage, retrieval, and system management.
Development Environment: Arduino IDE used for programming the ESP8266 board.

## Installation

Hardware Setup: Assemble the sensors, ESP8266 board, solenoid valves, motors, and servo motor according to the design detailed in the Hardware_Setup.pdf document found in the docs folder.

## Software Configuration:

Launch the Arduino IDE and set it up for the ESP8266 board.
Load the project sketches from the src folder into the Arduino IDE.
Update the sketch with your Firebase project details for authentication.
Upload the sketch to your ESP8266 board.

## Usage

Once installed, the system begins to automatically monitor the water quality parameters. The real-time data can be viewed on the attached LCD display or remotely via the Firebase console.

## System Architecture

The architecture seamlessly integrates various components for optimal functionality
Sensors gather real-time data on water quality.
The ESP8266 Board processes this data, making decisions based on set thresholds.
Actuators (solenoid valves and motors) make the necessary adjustments to the water conditions.
Data is transmitted to Firebase, facilitating remote monitoring and control.
A comprehensive diagram and explanation of the system architecture are available in the System_Architecture.pdf document in the docs folder.

## Results

Extensive testing in commercial aquaculture environments has demonstrated notable improvements in water quality management, health of the organisms, and operational efficiency. The detailed results and analyses are provided in the Results.pdf document in the docs folder.

## Future Work

Future enhancements will aim at incorporating advanced AI algorithms for predictive analytics, broadening the sensor array, and refining the user interface design. We welcome contributions and suggestions.

## Acknowledgements

Project Team:
[Team Members' names and emails are listed here]
