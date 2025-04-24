export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 24,
    location: "Los Angeles"
  };
  
  // Add them to the studentsList array
  const studentsList: Student[] = [student1, student2];
  
  // Create and render the table
  const table: HTMLTableElement = document.createElement("table");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
  
    const nameCell: HTMLTableCellElement = document.createElement("td");
    nameCell.textContent = student.firstName;
  
    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  