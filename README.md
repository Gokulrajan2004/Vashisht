Automating Commercial Aquaculture Using WiFi Technology
Abstract
This project introduces a revolutionary, cost-effective, and scalable system designed for the real-time monitoring and management of water quality in commercial aquaculture setups. By harnessing the power of advanced sensors and WiFi technology, the system promises to maintain optimal water conditions, ensuring the health and growth of aquatic organisms and enhancing productivity and profitability in aquaculture operations.

Table of Contents
Introduction
Features
Technology Stack
Installation
Usage
System Architecture
Contributing
Results
Future Work
License
Acknowledgements
Introduction
In the realm of aquaculture, maintaining pristine water quality is not just a necessity—it's a critical success factor. Challenges such as stress, disease, and substantial economic losses are often the result of poor water conditions. Addressing these challenges, our project delivers an automated system capable of monitoring key water quality parameters (ORP, pH, temperature, and TDS), and facilitating timely water adjustments through automated solenoid valves and motors. Enhanced with Firebase for real-time data access and control capabilities, our system is poised to set new standards in water quality management within the aquaculture industry.

Features
Real-time Water Quality Monitoring: Continuous measurement of critical parameters including ORP, pH, temperature, and TDS.
Remote Access and Control: Utilizes Firebase for seamless remote monitoring and adjustment capabilities via mobile devices.
Automated Water Adjustment: Automated solenoid valves and motors adjust water quality instantly upon detecting deviations from optimal levels.
Fish Feeding Automation: Features a servo motor-based automated feeding mechanism to optimize feeding schedules.
User-friendly Interface: Offers an intuitive LCD and mobile interface for straightforward monitoring and control.
Technology Stack
ESP8266 Board: For WiFi connectivity and system control.
Sensors: ORP, pH, Temperature, and TDS sensors for comprehensive water quality monitoring.
Actuators: Solenoid valves for water outflow control and motors for water replenishment based on water level sensing.
Fish Feeding Mechanism: Servo motor-driven.
Data Backend: Firebase for real-time data storage, retrieval, and remote system management.
Development Environment: Arduino IDE for programming the ESP8266 board.
 
Hardware Setup:
Assemble our sensors, ESP8266 board, solenoid valves, motors, and servo motor as per the system design documented in the Hardware_Setup.pdf located in the docs folder.

Software Configuration:

Open the Arduino IDE and configure it for the ESP8266 board.
Load the provided sketches from the src folder into the Arduino IDE.
Update the Firebase credentials in the sketch with your Firebase project details.
Upload the sketch to your ESP8266 board.
Usage
After installation, the system begins monitoring water quality parameters automatically. Real-time data can be viewed on the LCD display attached to the system or remotely via the Firebase console.
 

System Architecture
The system architecture integrates multiple components for a seamless operation:
 
Sensors collect real-time data on water quality parameters.
The ESP8266 Board processes this data, making decisions based on predefined thresholds.
Actuators (solenoid valves and motors) adjust the water conditions as required.
Data is sent to Firebase, allowing remote monitoring and control.
A detailed diagram and explanation of the system architecture can be found in the System_Architecture.pdf document in the docs folder.

 

Results
Our system has been rigorously tested in commercial aquaculture settings, showing significant improvements in water quality management, organism health, and operational efficiency. Detailed results and analysis are available in the Results.pdf document in the docs folder.

Future Work
Future enhancements will focus on integrating advanced AI algorithms for predictive analytics, expanding sensor capabilities, and improving user interface design. Contributions and suggestions are always welcome.

Acknowledgements
Project Team:  
Team Members(with mail):

 

