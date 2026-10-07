* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    color: #333;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 500px;
    background: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    text-align: center;
    margin-bottom: 20px;
}

.setup-section {
    text-align: center;
    margin-bottom: 20px;
}

#start-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

#start-btn:hover {
    background-color: #0056b3;
}

.summary {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

.card {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    flex: 1;
    margin: 0 5px;
}

.card h3 {
    font-size: 12px;
    text-transform: uppercase;
    color: #666;
}

.card p {
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
}

.form-control {
    margin-bottom: 15px;
}

.form-control label {
    display: block;
    margin-bottom: 5px;
}

.form-control input, .form-control select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #218838;
}

.list {
    list-style-type: none;
    margin-top: 15px;
}

.list li {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
}

.list li.income {
    border-left: 5px solid #28a745;
}

.list li.expense {
    border-left: 5px solid #dc3545;
}
