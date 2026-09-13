let transaction = [
  {
    id: 3,
    date: "2026-09-09",
    description: "Netflix",
    category: "Entertainment",
    amount: 150000,
  },
  {
    id: 2,
    date: "2026-09-07",
    description: "Groceries",
    category: "Food",
    amount: 300000,
  },
];

const today = new Date().toLocaleDateString("en-CA");

function updateDashboard() {
  let totalExpenses = 0;

  transaction.forEach((txn) => {
    totalExpenses += txn.amount;
  });

  document.querySelector(".expense-amount").textContent =
    `Rp ${totalExpenses.toLocaleString()}`;

  document.getElementById("transactionCount").textContent = transaction.length;
}

function updateTransactionTable() {
  const tbody = document.querySelector(".transaction-table tbody");
  tbody.innerHTML = "";

  transaction.forEach((txn) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${txn.date}</td>
      <td><strong>${txn.description}</strong></td>
      <td>${txn.category}</td>
      <td style="color: #ef4444; font-weight: 600;">Rp ${txn.amount.toLocaleString()}</td>
      <td><span class="status-success">Success</span></td>
      <td>
        <button class="action-btn" onclick="deleteTransaction(${txn.id})" title="Delete">
          Delete
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function openExpenseModal() {
  document.getElementById("expenseModal").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("expenseDate").value = today;
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto";

  if (modalId === "expenseModal") {
    document.getElementById("expenseForm").reset();
  }
}

window.onclick = function (event) {
  const expenseModal = document.getElementById("expenseModal");
  if (event.target === expenseModal) {
    closeModal("expenseModal");
  }
};

function addExpense() {
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const category = document.getElementById("expenseCategory").value;
  const description = document.getElementById("expenseDescription").value;
  const date = document.getElementById("expenseDate").value;

  if (!amount || !category || !date || !description) {
    alert("Please fill in all fields");
    return;
  }

  const newTransaction = {
    id: Date.now(),
    date: date,
    description: description,
    category: category,
    amount: amount,
  };

  transaction.unshift(newTransaction);

  updateDashboard();
  updateTransactionTable();
  closeModal("expenseModal");
  showNotification("Expense added successfully", "success");
}

function deleteTransaction(id) {
  const isConfirmed = confirm("Are you sure you want to delete this expense?");

  if (!isConfirmed) return;

  const index = transaction.findIndex((t) => t.id === id);
  if (index !== -1) {
    transaction.splice(index, 1);

    updateDashboard();
    updateTransactionTable();
    showNotification("Transaction deleted", "success");
  }
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top : 2rem;
    right: 2rem;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1001;
    background: ${type === "success" ? "#10b981" : "#ef4444"};
  `;

  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  updateDashboard();
  updateTransactionTable();
});
