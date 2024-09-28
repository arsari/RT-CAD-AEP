// Fetch data from the backend API
async function fetchCustomerData() {
  const response = await fetch('/api/data');
  return response.json();
}

// Update the metrics and customer table dynamically
function updateDashboard(data) {
  // Update overall metrics
  document.getElementById('conversion-rate').textContent = data.metrics.overall_conversion_rate;
  document.getElementById('active-users').textContent = data.metrics.active_users;
  document.getElementById('dropoff-rate').textContent = data.metrics.dropoff_rate;

  // Update customer table
  const customerTable = document.getElementById('customer-table');
  customerTable.innerHTML = ''; // Clear the table first
  data.customers.forEach((customer) => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.segment}</td>
            <td>${customer.conversion_rate}%</td>
        `;
    customerTable.appendChild(row);
  });
}

// Fetch data on page load and update the dashboard
window.onload = async () => {
  const data = await fetchCustomerData();
  updateDashboard(data);
};
