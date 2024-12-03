class Savingsbook {
    constructor() {
        this.array_list = [];

    }


    displaySavingsInfo() {
        const bookCode = document.getElementById('bookCode').value;
        const savingsType = document.getElementById('savingsType').value;
        const customerName = document.getElementById('customerName').value;
        const idCard = document.getElementById('idCard').value;
        const openingDate = document.getElementById('openingDate').value;
        const depositAmount = document.getElementById('depositAmount').value;


        if (!bookCode || !savingsType || !customerName || !idCard || !openingDate || !depositAmount) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }


        const newSavings = {
            bookCode: bookCode,
            savingsType: savingsType,
            customerName: customerName,
            idCard: idCard,
            openingDate: openingDate,
            depositAmount: depositAmount
        };

        this.array_list.push(newSavings);
        this.displayProduct();

    }

    displayProduct() {
        const content = document.getElementById("content");
        content.innerHTML = '';

        this.array_list.forEach((savings, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${savings.bookCode}</td>
                <td>${savings.savingsType}</td>
                <td>${savings.customerName}</td>
                <td>${savings.idCard}</td>
                <td>${savings.openingDate}</td>
                <td>${savings.depositAmount}</td>
                <td>
                    <button onclick="savingsbook.deleteSavings(${index})">Xóa</button>
                </td>
            `;

            content.appendChild(row);
        });
    }


    deleteSavings(index) {
        this.array_list.splice(index, 1);
        this.displayProduct();
    }


}

const savingsbook = new Savingsbook();

function displaySavingsInfo()  {
    savingsbook.displaySavingsInfo();
}
