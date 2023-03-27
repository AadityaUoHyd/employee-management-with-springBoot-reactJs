import axios from 'axios';

const EMP_API_BASE_URL="http://localhost:8080/api/v1/employees";

class EmployeeService {
 
  saveEmployee(employee) {
    return axios.post(EMP_API_BASE_URL, employee);
  }

  getEmployees(){
    return axios.get(EMP_API_BASE_URL);
  }

  deleteEmployee(id) {
    return axios.delete(EMP_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(EMP_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(EMP_API_BASE_URL + "/" + id, employee);
  }
  
}

export default new EmployeeService();