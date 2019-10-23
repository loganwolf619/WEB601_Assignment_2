Use sampleemployee;
-- drop table employee;
-- drop table department;
-- 1) The Employee Table
CREATE table employee (
EmployeeID INT UNIQUE NOT NULL,
EmployeeFName VARCHAR (100) NOT NULL,
EmployeeLName VARCHAR (100) NOT NULL,
EmployeeAddress VARCHAR (50) NOT NULL,
EmployeeSalary varchar(10) NOT NULL,
EmployeeDepartment VARCHAR (50) NOT NULL,
PRIMARY KEY (EmployeeID)
);

-- 2) The Department Table
Create table department (
DepartmentID INT UNIQUE NOT NULL,
DepartmentName varchar(50) not null,
DepartmentLocation varchar (50) not null,
Primary Key (DepartmentID)
);


