🚗 Smart Parking System

📌 Description

The Smart Parking System is a mini project designed to manage parking slots efficiently. It provides a user-friendly dashboard to check parking availability, park vehicles, and remove vehicles from parking slots.

The project uses HTML, CSS, and JavaScript for the user interface and 8051 Assembly Language for parking status simulation in GNUSim8051.

🎯 Objectives

- Display parking slot availability.
- Show available and occupied parking slots.
- Allow users to park and remove vehicles.
- Update parking status dynamically.
- Understand 8051 Assembly Language programming.

✨ Features

- Modern and responsive user interface.
- Four parking slots.
- Green color indicates an available slot.
- Red color indicates an occupied slot.
- Vehicle parking and removal options.
- Automatic updating of parking statistics.
- 8051 assembly program for parking status monitoring.

🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- 8051 Assembly Language
- GNUSim8051

📂 Project Structure

Smart-Parking-System/
├── index.html
├── style.css
├── script.js
├── smartparking.asm
└── README.md

▶️ How to Run the Web Interface

1. Download or clone this repository.
2. Open the project folder.
3. Open "index.html" in a web browser.
4. Select a parking slot.
5. Click Park Vehicle to occupy the slot.
6. Click Remove Vehicle to make the slot available again.

⚙️ How to Run the Assembly Program

1. Open GNUSim8051.
2. Open the "smartparking.asm" file.
3. Assemble the program.
4. Execute the program.
5. Check Port 1 inputs and Port 2 outputs.
6. Change the sensor input values to test different parking conditions.

Assembly Logic

- P1.0–P1.3 represent four parking sensor inputs.
- P2.0–P2.3 represent four parking status outputs.
- Input "0" indicates an available slot.
- Input "1" indicates an occupied slot.
- Output "1" indicates an occupied slot.

Note: The web interface and the 8051 assembly simulation run independently. They are not directly connected.

📊 Expected Output

Parking Slot| Status
Slot 1| Available / Occupied
Slot 2| Available / Occupied
Slot 3| Available / Occupied
Slot 4| Available / Occupied

The dashboard displays the total number of slots, available slots, and occupied slots.

🚀 Future Enhancements

- Integration with real parking sensors.
- LCD display for parking information.
- Automatic vehicle entry and exit detection.
- Hardware implementation using an 8051 microcontroller.

👩‍💻 Project Type

Academic Mini Project

📝 Conclusion

The Smart Parking System demonstrates how web technologies and 8051 Assembly Language can be used to understand basic parking management. It provides a simple dashboard and a separate assembly simulation for monitoring parking slot status.
