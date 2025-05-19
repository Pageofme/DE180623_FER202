import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RenderEmployee from './Exercise1';
import EmployeeList from './Exercise2';
import EmployeeTable from './Exercise3';
import AverageAgeComponent from './Exercise4';
import DropdownMenu from './Exercise5';
import ITDepartmentEmployees from './Exercise6';
import SortByDepartmentThenName from './Exercise7';
import GroupEmployeesByDepartment from './Exercise8';
import CheckTeenagers from './Exercise9';
import EmployeeSearch from './Exercise10';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RenderEmployee/>
    <EmployeeList/>
    <EmployeeTable/>
    <AverageAgeComponent/>
    <DropdownMenu/>
    <ITDepartmentEmployees/>
    <SortByDepartmentThenName/>
    <GroupEmployeesByDepartment/>
    <CheckTeenagers/>
    <EmployeeSearch/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
